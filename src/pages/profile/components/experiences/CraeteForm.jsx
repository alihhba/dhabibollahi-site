import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    useCreateExperience,
    useUpdateExperience,
    useDeleteExperience,
} from "@/features/experiences/hooks";

export default function ExperienceForm({
                                           isEdit = false,
                                           initialData = null,
                                           onSuccess,
                                       }) {
    const createExp = useCreateExperience();
    const updateExp = useUpdateExperience();
    const deleteExp = useDeleteExperience();

    const toDateInput = (iso) =>
        iso ? new Date(iso).toISOString().slice(0, 10) : "";

    const { register, handleSubmit, reset } = useForm({
        defaultValues: initialData
            ? {
                companyName: initialData.companyName || "",
                role: initialData.role || "",
                startAt: toDateInput(initialData.startAt),
                endAt: toDateInput(initialData.endAt),
                link: initialData.link || "",
                description: initialData.description || "",
            }
            : {
                companyName: "",
                role: "",
                startAt: "",
                endAt: "",
                link: "",
                description: "",
            },
    });

    // keep form in sync when initialData changes
    useEffect(() => {
        if (!initialData) return;
        reset({
            companyName: initialData.companyName || "",
            role: initialData.role || "",
            startAt: toDateInput(initialData.startAt),
            endAt: toDateInput(initialData.endAt),
            link: initialData.link || "",
            description: initialData.description || "",
        });
    }, [initialData, reset]);

    const onSubmit = (data) => {
        const payload = {
            companyName: data.companyName?.trim(),
            role: data.role?.trim(),
            startAt: data.startAt
                ? new Date(data.startAt).toISOString()
                : null,
            endAt: data.endAt ? new Date(data.endAt).toISOString() : null,
            link: data.link?.trim() || null,
            description: data.description?.trim() || "",
        };


        if (isEdit && initialData?.id) {
            updateExp.mutate(
                { id: initialData.id, ...payload },
                {
                    onSuccess: (saved) => {
                        reset({
                            companyName: saved.companyName || payload.companyName,
                            role: saved.role || payload.role,
                            startAt: toDateInput(saved.startAt) || "",
                            endAt: toDateInput(saved.endAt) || "",
                            link: saved.link || "",
                            description: saved.description || "",
                        });
                        onSuccess && onSuccess(saved);
                    },
                }
            );
        } else {
            createExp.mutate(payload, {
                onSuccess: (saved) => {
                    reset({
                        companyName: "",
                        role: "",
                        startAt: "",
                        endAt: "",
                        link: "",
                        description: "",
                    });
                    onSuccess && onSuccess(saved);
                },
            });
        }
    };

    const pending = createExp.isPending || updateExp.isPending;
    // const errorMsg =
    //     createExp.error?.data?.message ||
    //     createExp.error?.message ||
    //     updateExp.error?.data?.message ||
    //     updateExp.error?.message ||
    //     deleteExp.error?.message;

    const handleDelete = () => {
        if (!initialData?.id) return;
        if (!window.confirm("Are you sure you want to delete this experience?"))
            return;

        deleteExp.mutate(
            { id: initialData.id },
            {
                onSuccess: () => {
                    onSuccess && onSuccess(null); // pass null on delete
                },
            }
        );
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-2xl">
            <h2 className="text-lg font-semibold text-dark-100 mb-4">
                {isEdit ? "Edit Experience" : "Add Experience"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* --- fields --- */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Company Name
                    </label>
                    <input
                        {...register("companyName", { required: true })}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400"
                        placeholder="e.g. Everything Coffee"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">Role</label>
                    <input
                        {...register("role", { required: true })}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400"
                        placeholder="e.g. Graphic Designer"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Start Date
                        </label>
                        <input
                            type="date"
                            {...register("startAt")}
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">End Date</label>
                        <input
                            type="date"
                            {...register("endAt")}
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Website / Link
                    </label>
                    <input
                        {...register("link")}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400"
                        placeholder="https://example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">Description</label>
                    <textarea
                        {...register("description")}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400"
                        rows={4}
                        placeholder="What did you do there?"
                    />
                </div>

                {/*{errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}*/}

                <button
                    type="submit"
                    disabled={pending}
                    className="w-full rounded-xl bg-black text-white py-2 text-sm font-semibold disabled:opacity-50"
                >
                    {pending
                        ? isEdit
                            ? "Updating…"
                            : "Saving…"
                        : isEdit
                            ? "Update Experience"
                            : "Save Experience"}
                </button>

                {isEdit && initialData?.id && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={deleteExp.isPending}
                        className="mt-3 w-full rounded-xl bg-red-600 text-white py-2 text-sm font-semibold disabled:opacity-50"
                    >
                        {deleteExp.isPending ? "Deleting…" : "Delete Experience"}
                    </button>
                )}
            </form>
        </div>
    );
}

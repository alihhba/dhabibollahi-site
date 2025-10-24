import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {
    useCreateProjectCategory,
    useDeleteProjectCategory,
    useUpdateProjectCategory,
} from "@/features/projectCategory/hooks";

export default function ProjectCategoryForm({isEdit = false, initialData = null, onSuccess}) {
    const createCat = useCreateProjectCategory();
    const updateCat = useUpdateProjectCategory();
    const deleteCat = useDeleteProjectCategory();

    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(initialData?.cover || null);

    const {register, handleSubmit, reset, watch} = useForm({
        defaultValues: initialData
            ? {
                title: initialData.title || "",
                category: initialData.category || "",
                tags: initialData.tags?.join(", ") || "",
                isActive: initialData.isActive !== undefined ? initialData.isActive : true,
            }
            : {
                title: "",
                category: "",
                tags: "",
                isActive: true,
            },
    });

    const isActive = watch("isActive");

    useEffect(() => {
        if (!initialData) {
            reset({
                title: "",
                category: "",
                tags: "",
                isActive: true,
            });
            setPreviewUrl(null);
            setFile(null);
            return;
        }

        reset({
            title: initialData.title || "",
            category: initialData.category || "",
            tags: initialData.tags?.join(", ") || "",
            isActive: initialData.isActive !== undefined ? initialData.isActive : true,
        });
        setPreviewUrl(initialData.cover || null);
        setFile(null);
    }, [initialData, reset]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);

        if (selectedFile) {
            setPreviewUrl(URL.createObjectURL(selectedFile));
        } else {
            setPreviewUrl(initialData?.cover || null);
        }
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            // Append text fields
            formData.append("title", data.title.trim());
            formData.append("category", data.category.trim());
            formData.append("isActive", data.isActive ? "true" : "false");

            // Append tags as JSON string
            const tagsArray = data.tags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean);
            formData.append("tags", JSON.stringify(tagsArray));

            // Append file if selected
            if (file) {
                formData.append("cover", file);
            }

            // Send to API
            const url = isEdit && initialData?.id
                ? `/api/admin/projects-category/${initialData.id}`
                : "/api/admin/projects-category";

            const method = isEdit ? "PATCH" : "POST";

            const response = await fetch(url, {
                method,
                body: formData, // ✅ multipart/form-data
                credentials: "include",
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error ${response.status}`);
            }

            const saved = await response.json();

            // Reset form & preview
            reset({
                title: saved.title,
                category: saved.category,
                tags: saved.tags?.join(", ") || "",
                isActive: saved.isActive,
            });
            setFile(null);
            setPreviewUrl(saved.cover || null);
            onSuccess?.(saved);

        } catch (err) {
            console.error("Form submission error:", err);
            alert(err.message || "Failed to submit form");
        }
    };

    const handleDelete = () => {
        if (!initialData?.id) return;
        if (!window.confirm("Are you sure you want to delete this category?")) return;

        deleteCat.mutate(initialData.id, {
            onSuccess: () => onSuccess?.(null),
            onError: (error) => {
                console.error("Delete error:", error);
                alert(`Failed to delete category: ${error.message}`);
            },
        });
    };

    const pending = createCat.isPending || updateCat.isPending || deleteCat.isPending;

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-2xl">
            <h2 className="text-lg font-semibold text-dark-100 mb-4">
                {isEdit ? "Edit Project Category" : "Add Project Category"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
                {/* Title */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Title *</label>
                    <input
                        {...register("title", {required: "Title is required"})}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400"
                        placeholder="Brand Identity"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Category *</label>
                    <input
                        {...register("category", {required: "Category is required"})}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400"
                        placeholder="brand-identity"
                    />
                </div>

                {/* Tags */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Tags (comma separated)</label>
                    <input
                        {...register("tags")}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400"
                        placeholder="Logo Design, Stationary, Guideline"
                    />
                </div>

                {/* Active Status */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        {...register("isActive")}
                        id="isActive"
                        className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <label htmlFor="isActive" className="ml-2 text-sm text-gray-600">
                        Active Category {isActive ? "(Enabled)" : "(Disabled)"}
                    </label>
                </div>

                {/* Cover Image */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Cover Image {file ? "(New file selected)" : "(No file selected)"}
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full text-sm border border-gray-300 rounded-xl p-2"
                    />
                    {previewUrl && (
                        <div className="mt-2">
                            <img
                                src={previewUrl}
                                alt="Cover preview"
                                className="w-32 h-32 object-cover rounded-md"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                {isEdit && !file ? "Current cover image" : "New cover image preview"}
                            </p>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={pending}
                    className="w-full rounded-xl bg-black text-white py-2 text-sm font-semibold disabled:opacity-50 hover:bg-gray-800 transition-colors"
                >
                    {pending ? (
                        isEdit ? "Updating…" : "Creating…"
                    ) : (
                        isEdit ? "Update Category" : "Create Category"
                    )}
                </button>

                {/* Delete Button (only for edit mode) */}
                {isEdit && initialData?.id && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={pending}
                        className="w-full rounded-xl bg-red-600 text-white py-2 text-sm font-semibold disabled:opacity-50 hover:bg-red-700 transition-colors"
                    >
                        {deleteCat.isPending ? "Deleting…" : "Delete Category"}
                    </button>
                )}
            </form>

            {/* Error Messages */}
            {(createCat.error || updateCat.error || deleteCat.error) && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm">
                    {createCat.error?.message || updateCat.error?.message || deleteCat.error?.message ||
                        "An error occurred. Please try again."}
                </div>
            )}

        </div>
    );
}

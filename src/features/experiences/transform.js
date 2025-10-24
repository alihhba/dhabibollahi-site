export function transformExperience(exp) {
    return {
        id: exp.id,
        tag: exp.companyName,
        title: `${exp.role}  •  ${
            exp.isCurrent
                ? "Current"
                : `${exp.startAt?.split('T')[0]} - ${exp.endAt?.split('T')[0] ?? "Present"}`
        }`,
        content: exp.description,
        date: exp.startAt,
        minRead: "",
        path: exp.link,
    };
}

export function transformExperiences(data) {
    if (!data) return [1, 2, 3, 4, 5];
    return (data?.items || data)?.map(transformExperience);
}

export function transformProjectCategory(pc) {
    return {
        id: pc.id,
        title: pc.title,
        category: pc.category,
        tags: pc.tags || [],
        cover: pc.cover, // URL from backend
    };
}

export function transformProjectCategories(data) {
    if (!data) return [];
    return (data.items || data)?.map(transformProjectCategory);
}

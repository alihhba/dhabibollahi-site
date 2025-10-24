export const qk = {
    experiences: {
        all: ["experiences"],
        list: (params = {}) => ["experiences", "list", params],
        detail: (id) => ["experiences", "detail", id],
    },
    projectCategory: {
        all: ["projectCategory"],
        list: (params = {}) => ["projectCategory", "list", params],
        detail: (id) => ["projectCategory", "detail", id],
    },
};

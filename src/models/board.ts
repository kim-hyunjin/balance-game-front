export type Board = {
    id: number;
    title: string;
    writer: string;
    thumbnail?: string;
    description?: string;
    createdAt: string;
    contents: {
        id: number;
        description: string;
        photo_url?: string;
    }[];
};

export type BoardPage = {
    content: Board[];
    pageable: {
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean;
        };
        offset: number;
        pageSize: number;
        pageNumber: number;
        unpaged: boolean;
        paged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
};

export const getBoards = async () => {
    const res = await fetch("/board");
    if (!res.ok) {
        throw new Error("got error while get boards from server");
    }

    return res.json();
};

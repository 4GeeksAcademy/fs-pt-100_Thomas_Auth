import useGlobalReducer from "../hooks/useGlobalReducer"

export const Private = () => {

    const { store, dispatch } = useGlobalReducer();

    return (
        <>
            <h2>This is private!</h2>
            <h3>Only for the eyes of: {store.user?.email}</h3>
        </>
    );
};
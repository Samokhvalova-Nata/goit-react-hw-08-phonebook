import { useAuth } from "hooks"

export const UserMenu = () => {
    const { user } = useAuth();

    return (
        <>
            <p>{user.email}</p>
            <button type="button">Logout</button>
        </>
    );
};
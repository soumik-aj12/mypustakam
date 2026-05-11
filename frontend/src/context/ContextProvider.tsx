import React, { createContext, useContext, useMemo, useState } from "react";

type User = {
	id: string;
	name: string;
	email: string;
};

type ContextType = {
	user: User | null;
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
};

const AppContext = createContext<ContextType | undefined>(undefined);

type ContextProviderProps = {
	children: React.ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	const login = () => {
		// Dummy auth for now. Replace with real auth integration later.
		setUser({
			id: "demo-user-1",
			name: "Demo User",
			email: "demo@example.com",
		});

		// Future auth implementation example:
		// const response = await authService.login(credentials);
		// setUser(response.user);
		// localStorage.setItem("token", response.token);
	};

	const logout = () => {
		// Dummy logout for now.
		setUser(null);

		// Future auth implementation example:
		// await authService.logout();
		// localStorage.removeItem("token");
		// setUser(null);
	};

	const value = useMemo(
		() => ({
			user,
			isAuthenticated: Boolean(user),
			login,
			logout,
		}),
		[user]
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): ContextType => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within a ContextProvider");
	}
	return context;
};

export default ContextProvider;

'use client'

import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@nextui-org/shared-icons";
import React, { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => setIsSelected(theme === 'custom-dark'), [theme]);

    const toggleTheme = () => {
        if (theme === 'light' || theme === 'custom-white') {
            setTheme('custom-dark')
        } else {
            setTheme('custom-white')
        }
    }

    return (
        <Switch
            className="flex items-center h-full"
            size="lg"
            color="secondary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            isSelected={isSelected}
            onValueChange={toggleTheme}
        />
    )
};

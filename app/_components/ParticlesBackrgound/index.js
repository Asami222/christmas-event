'use client'
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import template from "@/public/assets/particlesjs-config.json";

export default function ParticlesBackrgound({ children }) {

    const params = template;

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);

    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={params}
            />
            {children}
        </>
    )

}
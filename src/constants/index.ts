export const CalculateSizes = (isMobile: boolean, isTablet: boolean) => {
    return {
        globeSize: isMobile ? 0.8 : isTablet ? 1 : 1,
        globePosition: [0, -0.3, 0],
        globeRotation: [0, 0, 0],
        sonicSize:  isMobile ? 1 : isTablet ? 1 : 1,
        sonicPosition:  isMobile ? [0.05, 0.5, 0] : isTablet ? [0.05, 0.7, 0] : [0.05, 0.7, 0], 
        sonicRotation: [0, -1.5, 0],     
    }
}
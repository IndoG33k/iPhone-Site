export const animateWithGsapTimeline = (timeline, rotaitonRef, rotatiionState,
    firstTarget, secondTarget, animationProps) => {
        timeline.to(rotaitonRef.current.rotation, {
            y: rotatiionState,
            duration: 1,
            ease: 'power2.inOut'
        })

        timeline.to(
            firstTarget,
            {
                ...animationProps,
                ease: 'power2.inOut'
            },
            '<'
        )

        timeline.to(
            secondTarget,
            {
                ...animationProps,
                ease: 'power2.inOut'
            },
            '<'
        )
}
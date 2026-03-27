import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SiteMotion = () => {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        'main',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.6, ease: 'power2.out' },
      );

      gsap.to('.motion-blob-gold', {
        x: 32,
        y: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.motion-blob-teal', {
        x: -28,
        y: -16,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      const sections = gsap.utils.toArray<HTMLElement>('main > section');
      sections.forEach((section) => {
        if (section.id === 'home') {
          return;
        }

        gsap.fromTo(
          section,
          {
            autoAlpha: 0,
            y: 48,
            rotateX: 6,
            transformPerspective: 1000,
            transformOrigin: 'top center',
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 84%',
              end: 'bottom 70%',
              toggleActions: 'play none none reverse',
            },
          },
        );

        const heading = section.querySelector('.section-heading');
        if (heading) {
          gsap.fromTo(
            heading,
            { autoAlpha: 0, y: 22, scale: 0.96 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 86%',
              },
            },
          );
        }
      });

      const cards = gsap.utils.toArray<HTMLElement>('.card-3d, .award-card-hover, .skill-card-hover, .cert-flash-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 24,
            rotateY: i % 2 === 0 ? -4 : 4,
            rotateX: 8,
            transformPerspective: 1100,
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
            },
          },
        );
      });

      const interactiveCards = gsap.utils.toArray<HTMLElement>('.card-3d, .cert-flash-card');
      interactiveCards.forEach((card) => {
        const rotateXTo = gsap.quickTo(card, 'rotateX', { duration: 0.28, ease: 'power2.out' });
        const rotateYTo = gsap.quickTo(card, 'rotateY', { duration: 0.28, ease: 'power2.out' });

        const onMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          rotateYTo((px - 0.5) * 8);
          rotateXTo((0.5 - py) * 8);
        };

        const onLeave = () => {
          rotateXTo(0);
          rotateYTo(0);
        };

        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
        cleanups.push(() => {
          card.removeEventListener('mousemove', onMove);
          card.removeEventListener('mouseleave', onLeave);
        });

        ScrollTrigger.create({
          trigger: card,
          onLeave: onLeave,
          onLeaveBack: onLeave,
        });
      });

      ScrollTrigger.refresh();

      window.setTimeout(() => ScrollTrigger.refresh(), 800);
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};

export default SiteMotion;

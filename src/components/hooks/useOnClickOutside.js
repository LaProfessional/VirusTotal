import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = e => {
            if (ref.current.contains(e.target)) return;
            handler(e);
        };

        document.addEventListener('pointerdown', listener);

        return () => {
            document.removeEventListener('pointerdown', listener);
        };

    }, [ref, handler]);
};

export default useOnClickOutside;
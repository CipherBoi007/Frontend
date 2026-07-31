import React from 'react';

const Marquee = () => {
    const logos = [
        'St. Xavier\'s College', 'Delhi University', 'Loyola College Chennai',
        'Presidency College', 'Fergusson College', 'Christ University',
        'Symbiosis Institute', 'Ramaiah College', 'JNTU Hyderabad',
        'Anna University', 'Amity University', 'Manipal Institute',
    ];

    const doubled = [...logos, ...logos];

    return (
        <div className="py-8 border-y border-border bg-secondary overflow-hidden">
            <p className="text-center text-[0.8rem] font-semibold text-slate-400 uppercase tracking-widest mb-6">
                Trusted by leading institutions across India
            </p>
            <div className="flex gap-16 items-center w-max animate-[scroll_35s_linear_infinite]">
                {doubled.map((name, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[1rem] font-bold text-slate-400 whitespace-nowrap">
                        <div className="w-2 h-2 rounded-full bg-primary/40 flex-shrink-0"></div>
                        {name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;

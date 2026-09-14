'use client';

import { ReactNode } from 'react';

export default function ArchiveShell({children}:{children:ReactNode}){
 return <div className="archive-shell">{children}<div className="archive-scanline" /></div>;
}

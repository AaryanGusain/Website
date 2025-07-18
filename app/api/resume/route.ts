import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'files', 'GusainAaryan_Professional_Resume_FINAL.pdf');
    const fileBuffer = readFileSync(filePath);
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=GusainAaryan_Professional_Resume.pdf'
      },
    });
  } catch (error) {
    return new NextResponse('PDF not found', { status: 404 });
  }
}

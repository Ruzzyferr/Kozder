import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const WIDTH = 1200;
const HEIGHT = 630;
const source = fileURLToPath(
  new URL('../../../public/images/stories/halilozkaraca.jpeg', import.meta.url),
);

export const GET = (async () => {
  const [background, foreground] = await Promise.all([
    sharp(source)
      .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
      .blur(28)
      .modulate({ brightness: 0.72, saturation: 0.82 })
      .toBuffer(),
    sharp(source)
      .resize(WIDTH, HEIGHT, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer(),
  ]);

  const image = await sharp(background)
    .composite([{ input: foreground, gravity: 'centre' }])
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();

  return new Response(image, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}) satisfies APIRoute;

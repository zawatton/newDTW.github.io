import { Gvar } from '../variable';
import { spriteManager } from './SpriteManager';

function gcopy(
    org_buffer_id: any,
    x: number,
    y: number,
    img_width: number,
    img_height: number,
    dest_width?: number, // 描画先の幅（任意指定）
    dest_height?: number // 描画先の高さ（任意指定）
) {
    // 個別スプライトがあればそちらを使用 (TODO: デバッグ後に有効化)
    // if (spriteManager.drawLegacy(org_buffer_id, x, y, img_width, img_height, dest_width, dest_height)) {
    //     return;
    // }

    const sourceCanvas = Gvar.canvases[org_buffer_id];
    if (!sourceCanvas || sourceCanvas.width === 0 || sourceCanvas.height === 0) {
        console.error('Source canvas is not initialized or has a size of 0.');
        return;
    }

    const ctx = Gvar.context;

    const target_width = dest_width ?? img_width;
    const target_height = dest_height ?? img_height;

    if (org_buffer_id === 25) {
        const ctxSrc = sourceCanvas.getContext('2d', { willReadFrequently: true });
        if (ctxSrc) {
            const imgData = ctxSrc.getImageData(x, y, img_width, img_height);
            const data = imgData.data;
            for (let i = 0; i < data.length; i += 4) {
                const grayscale = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
                data[i] = grayscale;
                data[i + 1] = grayscale;
                data[i + 2] = grayscale;
            }
            // ImageDataをスケール描画するため一時的なキャンバスを使用
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = img_width;
            tempCanvas.height = img_height;
            tempCanvas.getContext('2d')?.putImageData(imgData, 0, 0);
            ctx.drawImage(
                tempCanvas,
                0, 0, img_width, img_height,
                Gvar.position[0], Gvar.position[1],
                target_width, target_height
            );
        }
    } else if (org_buffer_id === 8 && ((x === 760 && y === 920) || (x > 400 && y < 350))) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.drawImage(
            sourceCanvas,
            x, y, img_width, img_height,
            Gvar.position[0], Gvar.position[1],
            target_width, target_height
        );
        ctx.globalCompositeOperation = 'source-over';
        ctx.restore();
    } else {
        ctx.drawImage(
            sourceCanvas,
            x, y, img_width, img_height,
            Gvar.position[0], Gvar.position[1],
            target_width, target_height
        );
    }
}

export { gcopy };
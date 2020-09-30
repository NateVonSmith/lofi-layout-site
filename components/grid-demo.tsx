import { useEffect, useRef, useState } from 'react';
import { cellColors, copyToClipboard, gapPxOptions } from '../utils/constants';

const columnCountOptions = [1, 2, 3, 4, 6];
const cellSizeOptions = [80, 100, 120, 140];

const GridDemo = () => {
    const [columnCount, setColumnCount] = useState(columnCountOptions[columnCountOptions.length - 1]);
    const [cellSize, setCellSize] = useState(cellSizeOptions[0]);
    const [gapPx, setGapPx] = useState<number>(Number(gapPxOptions[0]));
    const [classText, setClassText] = useState<string>();
    const inputRef = useRef(null);

    useEffect(() => {
        setClassText(`lofi-grid lofi-grid-columns-${columnCount} lofi-cell-${cellSize} lofi-gap-${gapPx}`);
    }, [columnCount, cellSize, gapPx]);

    return (
        <div style={{ height: '100vh' }} className="lofi-layout lofi-column lofi-gap-10">
            <form>
                <input style={{ width: '100%' }} type="text" ref={inputRef} value={classText} onClick={() => copyToClipboard(inputRef)} />
            </form>

            <form className="lofi-layout lofi-row">
                <div>
                    {columnCountOptions.map((count) => (
                        <div>
                            <input
                                type="radio"
                                value={count}
                                onChange={(e) => setColumnCount(Number(e.target.value))}
                                checked={columnCount === count}
                            />
                            {count}
                        </div>
                    ))}
                </div>
                <div>
                    {cellSizeOptions.map((size) => (
                        <div>
                            <input
                                type="radio"
                                value={size}
                                onChange={(e) => setCellSize(Number(e.target.value))}
                                checked={cellSize === size}
                            />
                            {size}
                        </div>
                    ))}
                </div>
                <div>
                    {gapPxOptions.map((px) => (
                        <div>
                            <input type="radio" value={px} onChange={(e) => setGapPx(Number(e.target.value))} checked={gapPx === px} />
                            {px}px
                        </div>
                    ))}
                </div>
            </form>

            <div style={{ width: '100%' }} className={classText}>
                {[...cellColors, ...cellColors, ...cellColors, ...cellColors].map((color) => (
                    <div style={{ backgroundColor: `#${color}`, padding: '40px' }}></div>
                ))}
            </div>
        </div>
    );
};

export default GridDemo;

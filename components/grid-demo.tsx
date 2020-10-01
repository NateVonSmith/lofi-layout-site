import { useEffect, useRef, useState } from 'react';
import { cellColors, copyToClipboard, gapPxOptions } from '../utils/constants';
import { LayoutConfig } from '../utils/interfaces';

const columnCountOptions = [1, 2, 3, 4, 6];
const cellSizeOptions = [80, 100, 120, 140];

const GridDemo = () => {
    const [columnCount, setColumnCount] = useState(columnCountOptions[columnCountOptions.length - 1]);
    const [cellSize, setCellSize] = useState(null);
    const [gapPx, setGapPx] = useState<number>(Number(gapPxOptions[0]));
    const [classText, setClassText] = useState<string>();
    const inputRef = useRef(null);

    const layoutConfig: LayoutConfig[] = [
        {
            options: columnCountOptions,
            stateVal: columnCount,
            setStateVal: setColumnCount
        },
        {
            options: cellSizeOptions,
            stateVal: cellSize,
            setStateVal: setCellSize
        },
        {
            options: gapPxOptions,
            stateVal: gapPx,
            setStateVal: setGapPx
        }
    ];

    useEffect(() => {
        console.log(columnCount, cellSize);

        if (columnCount !== null && cellSize !== null) setCellSize(null);
        if (cellSize !== null && columnCount !== null) setColumnCount(null);

        setClassText(`lofi-grid lofi-grid-columns-${columnCount} lofi-cell-${cellSize} lofi-gap-${gapPx}`);
    }, [columnCount, cellSize, gapPx]);

    return (
        <section className="demo-container lofi-layout lofi-column lofi-gap-10">
            <input className="w-100-pct" type="text" ref={inputRef} value={classText} onClick={() => copyToClipboard(inputRef)} />
            <div className="lofi-layout lofi-row lofi-space-between-center lofi-gap-10">
                {layoutConfig.map(({ options, stateVal, setStateVal }) => (
                    <div>
                        {options.map((option, i) => (
                            <button
                                key={i}
                                value={option}
                                onClick={() => setStateVal(option)}
                                className={stateVal === option ? 'selected' : ''}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className={`w-100-pct ${classText} layout-container`}>
                {[...cellColors, ...cellColors, ...cellColors, ...cellColors].map((color, i) => (
                    <div key={i} style={{ backgroundColor: `#${color}` }}></div>
                ))}
            </div>
        </section>
    );
};

export default GridDemo;

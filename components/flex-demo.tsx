import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { cellColors, copyToClipboard, gapPxOptions } from '../utils/constants';

const flexDirectionOptions = ['row', 'column'];
const flexSpacingOptions = [
    'start',
    'end-center',
    'start-center',
    'center',
    'center-start',
    'stretch-start',
    'space-around-center',
    'space-between-center',
    'space-between-start',
    'space-between-stretch',
    'space-evenly'
];
const gapPctOptions = []; // [3, 10, 20, 21, 24, 25, 30, 33, 34, 40, 49, 50, 60, 64, 65, 66, 75, 80, 100];
const childSizeOptions = [
    'lofi-flex-3-percent',
    'lofi-flex-10-percent',
    'lofi-flex-20-percent',
    'lofi-flex-21-percent',
    'lofi-flex-24-percent',
    'lofi-flex-25-percent',
    'lofi-flex-30-percent',
    'lofi-flex-33-percent',
    'lofi-flex-34-percent',
    'lofi-flex-40-percent',
    'lofi-flex-49-percent',
    'lofi-flex-50-percent',
    'lofi-flex-60-percent',
    'lofi-flex-64-percent',
    'lofi-flex-65-percent',
    'lofi-flex-66-percent',
    'lofi-flex-75-percent',
    'lofi-flex-80-percent',
    'lofi-flex-100-percent',
    'lofi-stretch'
];

const FlexDemo = () => {
    const [flexDirection, setFlexDirection] = useState(flexDirectionOptions[0]);
    const [flexSpacing, setFlexSpacing] = useState(flexSpacingOptions[flexSpacingOptions.length - 1]);
    const [gapPx, setGapPx] = useState<number>(Number(gapPxOptions[0]));
    const [gapPct, setGapPct] = useState<number>();
    const [gapOtherPct, setGapOtherPct] = useState<number>();
    const [classText, setClassText] = useState<string>();
    const inputRef = useRef(null);

    useEffect(() => {
        setClassText(`lofi-layout lofi-${flexDirection} lofi-${flexSpacing} lofi-gap-${gapPx}`);
    }, [flexDirection, flexSpacing, gapPx]);

    const handleGapPctChange = (e) => {
        const pctVal = Number(e.target.value);
        const otherPctVal = (100 - pctVal) / (cellColors.length - 1);

        setGapPct(pctVal);
        setGapOtherPct(otherPctVal);
    };

    return (
        <div style={{ height: '100vh' }} className="lofi-layout lofi-column lofi-gap-10">
            <form>
                <input style={{ width: '100%' }} type="text" ref={inputRef} value={classText} onClick={() => copyToClipboard(inputRef)} />
            </form>

            <form className="lofi-layout lofi-row">
                <div>
                    {flexDirectionOptions.map((dir) => (
                        <div>
                            <input
                                type="radio"
                                value={dir}
                                onChange={(e) => setFlexDirection(e.target.value)}
                                checked={flexDirection === dir}
                            />
                            {dir}
                        </div>
                    ))}
                </div>
                <div>
                    {flexSpacingOptions.map((spacing) => (
                        <div>
                            <input
                                type="radio"
                                value={spacing}
                                onChange={(e) => setFlexSpacing(e.target.value)}
                                checked={flexSpacing === spacing}
                            />
                            {spacing}
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
                <div>
                    {gapPctOptions.map((pct) => (
                        <div>
                            <input type="radio" value={pct} onChange={handleGapPctChange} checked={gapPct === pct} />
                            {pct}%
                        </div>
                    ))}
                </div>
            </form>
            <div style={{ width: '100%' }} className={classText + ' lofi-stretch'}>
                {cellColors.map((color, i) => (
                    <div
                        style={{ backgroundColor: `#${color}`, padding: '40px', height: '100%' }}
                        className={cn(i === 2 ? `lofi-flex-${gapPct}-percent` : `lofi-flex-${gapOtherPct}-percent`)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default FlexDemo;

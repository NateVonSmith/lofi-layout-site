import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { cellColors, copyToClipboard, gapPxOptions } from '../utils/constants';
import { LayoutConfig } from '../utils/interfaces';

const flexDirectionOptions: string[] = ['row', 'column'];
const flexSpacingOptions: string[] = [
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
const gapPctOptions: number[] = []; // [3, 10, 20, 21, 24, 25, 30, 33, 34, 40, 49, 50, 60, 64, 65, 66, 75, 80, 100];
const childSizeOptions: string[] = [
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

    const layoutConfig: LayoutConfig[] = [
        {
            options: flexDirectionOptions,
            stateVal: flexDirection,
            setStateVal: setFlexDirection
        },
        {
            options: flexSpacingOptions,
            stateVal: flexSpacing,
            setStateVal: setFlexSpacing
        },
        {
            options: gapPxOptions,
            stateVal: gapPx,
            setStateVal: setGapPx
        },
        {
            options: gapPctOptions,
            stateVal: gapPct,
            setStateVal: setGapPct
        }
    ];

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
        <section className="demo-container lofi-layout lofi-column lofi-gap-10">
            <input className="w-100-pct" type="text" ref={inputRef} value={classText} onClick={() => copyToClipboard(inputRef)} />
            <div className="lofi-layout lofi-row lofi-space-between-center lofi-gap-10">
                {layoutConfig.map(({ options, stateVal, setStateVal }) => (
                    <div>
                        {options.map((option, i) => (
                            <button
                                key={option + i}
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
            <div className={`w-100-pct ${classText} lofi-stretch layout-container`}>
                {cellColors.map((color, i) => (
                    <div
                        key={color + i}
                        style={{ backgroundColor: `#${color}` }}
                        className={cn('tile', i === 2 ? `lofi-flex-${gapPct}-percent` : `lofi-flex-${gapOtherPct}-percent`)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default FlexDemo;

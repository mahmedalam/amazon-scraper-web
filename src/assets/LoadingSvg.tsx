import { SvgProps } from '@/props/svgProps'


export default function LoadingSvg({ className, ...events }: SvgProps) {
    return (
        <svg className={className} {...events} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.83502 29C4.83502 15.6532 15.6547 4.83344 29.0016 4.83344C42.3483 4.83344 53.1681 15.6532 53.1681 29C53.1681 31.0865 52.9037 33.111 52.4066 35.0424C51.8672 37.1376 49.5782 38.1108 47.5371 37.3926C45.8019 36.7819 45.0049 34.7993 45.4396 33.0117C45.7524 31.7257 45.9181 30.3823 45.9181 29C45.9181 19.6572 38.3443 12.0834 29.0016 12.0834C19.6588 12.0834 12.085 19.6572 12.085 29" stroke="#00FF1D" stroke-width="4" stroke-linecap="round" />
            <path opacity="0.4" d="M4.83502 29.0004C4.83502 42.3471 15.6548 53.1669 29.0016 53.1669C34.4429 53.1669 39.4645 51.3684 43.5039 48.3336M12.085 29.0004C12.085 38.3432 19.6588 45.917 29.0016 45.917C32.1908 45.917 35.1737 45.0344 37.7199 43.5003" stroke="#00FF1D" stroke-width="4" stroke-linecap="round" />
        </svg>
    )
}
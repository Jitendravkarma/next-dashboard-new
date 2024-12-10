
import Countdown from 'react-countdown';
// import TimeFormat from 'hh-mm-ss'

const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <AfterComplete />;
    } else {
        // Render a countdown
        return (
            <div className="mt-5 space-y-6">
                <div className="">
                    <div className="grid md:grid-cols-4 gap-4 max-w-xl mx-auto">
                        <div className="p-5 text-center bg-gray-100 dark:bg-black/20 rounded-sm space-y-5">
                            <h4 className="font-semibold text-3xl leading-none">
                                {days}
                            </h4>
                            <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-white/70">DAYS
                            </p>
                        </div>
                        <div className="p-5 text-center bg-gray-100 dark:bg-black/20 rounded-sm space-y-5">
                            <h4 className="font-semibold text-3xl leading-none">
                                {hours}
                            </h4>
                            <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-white/70">Hours
                            </p>
                        </div>
                        <div className="p-5 text-center bg-gray-100 dark:bg-black/20 rounded-sm space-y-5">
                            <h4 className="font-semibold text-3xl leading-none">
                                {minutes}
                            </h4>
                            <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-white/70">
                                MINUTES</p>
                        </div>
                        <div className="p-5 text-center bg-gray-100 dark:bg-black/20 rounded-sm space-y-5">
                            <h4 className="font-semibold text-3xl leading-none">
                                {seconds}
                            </h4>
                            <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-white/70">
                                SECONDS</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-center text-sm text-gray-600 dark:text-white/70">
                        Follow Us
                    </p>
                    <div className="flex space-x-1 rtl:space-x-reverse justify-center text-center">
                        <button aria-label="button" type="button"
                            className="m-0 ti-btn ti-btn-soft-primary">
                            <i className="ri ri-github-line text-lg leading-none"></i>
                        </button>
                        <button aria-label="button" type="button"
                            className="m-0 ti-btn ti-btn-soft-primary">
                            <i className="ri ri-instagram-line text-lg leading-none"></i>
                        </button>
                        <button aria-label="button" type="button"
                            className="m-0 ti-btn ti-btn-soft-primary">
                            <i className="ri ri-twitter-x-line text-lg leading-none"></i>
                        </button>
                        <button aria-label="button" type="button"
                            className="m-0 ti-btn ti-btn-soft-primary">
                            <i className="ri ri-linkedin-line text-lg leading-none"></i>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
};

export function DayCounter() {
    return (<Countdown date={Date.now() + 8500590000} renderer={rendering} />);
}

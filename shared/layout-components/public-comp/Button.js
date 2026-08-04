export const Tooltip = ({ children, content, position = "bottom", width = "w-64" }) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "left-1/2 -bottom-1 -translate-x-1/2",
    bottom: "left-1/2 -top-1 -translate-x-1/2",
    left: "-right-1 top-1/2 -translate-y-1/2",
    right: "-left-1 top-1/2 -translate-y-1/2",
  };

  return (
    <div className="relative inline-flex items-center group">
      {children}

      <div
        className={`absolute z-50 ${positionClasses[position]} ${width}
          rounded-md bg-gray-900 px-3 py-2 text-xs text-white shadow-lg
          opacity-0 invisible transition-all duration-200
          group-hover:opacity-100 group-hover:visible
          group-focus-within:opacity-100 group-focus-within:visible`}
      >
        {content}

        <div
          className={`absolute h-3 w-3 rotate-45 rounded-[1px] bg-gray-900 ${arrowClasses[position]}`}
        />
      </div>
    </div>
  );
};
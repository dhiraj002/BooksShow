import React from "react";

const FloatingPartical = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => {
                return (
                    <div
                        key={i}
                        className="absolute bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 5}s infinite normal none running float`,
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default FloatingPartical;

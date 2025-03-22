export const themeStyles = {
  light: {
    primary: {
      gradient: "from-blue-500 via-purple-500 to-indigo-500",
      hover: "hover:from-blue-600 hover:to-purple-600",
      solid: "bg-blue-500",
      text: "text-blue-600"
    },
    background: {
      main: "bg-gray-50",
      overlay: "bg-gradient-to-br from-blue-600/90 to-purple-700/90",
      card: "bg-white/80",
      section: "bg-white/50"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      muted: "text-gray-500",
      accent: "text-blue-600"
    },
    border: "border-gray-200",
    glass: "backdrop-blur-md bg-white/80"
  },
  dark: {
    primary: {
      gradient: "from-blue-600 via-purple-600 to-purple-700",
      hover: "hover:from-blue-700 hover:to-purple-800",
      solid: "bg-blue-600",
      text: "text-blue-400"
    },
    background: {
      main: "bg-gray-900",
      overlay: "bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90",
      card: "bg-gray-800/30",
      section: "bg-gray-800/50"
    },
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      muted: "text-gray-400",
      accent: "text-blue-400"
    },
    border: "border-gray-700",
    glass: "backdrop-blur-md bg-gray-800/30"
  }
};

// Add backward compatibility for existing themeConfig usage
export const themeConfig = themeStyles;
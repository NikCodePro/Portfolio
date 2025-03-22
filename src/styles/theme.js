export const themeStyles = {
  light: {
    primary: {
      gradient: "from-blue-500 to-purple-500",
      hover: "hover:from-blue-600 hover:to-purple-600",
      solid: "bg-blue-500",
      text: "text-blue-500"
    },
    background: {
      main: "bg-gradient-to-br from-gray-50 to-white",
      card: "bg-white",
      section: "bg-gray-50"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      accent: "text-blue-500"
    },
    border: "border-gray-200",
    glass: "bg-white/70 backdrop-blur-sm"
  },
  dark: {
    primary: {
      gradient: "from-blue-400 to-purple-400",
      hover: "hover:from-blue-500 hover:to-purple-500",
      solid: "bg-blue-400",
      text: "text-blue-400"
    },
    background: {
      main: "bg-gradient-to-br from-gray-900 to-black",
      card: "bg-gray-800",
      section: "bg-gray-900"
    },
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      accent: "text-blue-400"
    },
    border: "border-gray-700",
    glass: "bg-gray-800/70 backdrop-blur-sm"
  }
};

// Add backward compatibility for existing themeConfig usage
export const themeConfig = themeStyles;
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#36373a",
              "background-light": "#f7f7f7",
              "background-dark": "#191919",

              // premium accents (NEW)
              accent: "#7b7d85",
              ink: "#1f2023",
              "soft-ink": "#50525a",
              line: "rgba(54,55,58,.12)",
              card: "rgba(255,255,255,.75)",
            },
            fontFamily: {
              display: ["Inter", "sans-serif"],
            },
            borderRadius: {
              DEFAULT: "0.25rem",
              lg: "0.5rem",
              xl: "0.75rem",
              full: "9999px",
            },
            boxShadow: {
              soft: "0 10px 30px rgba(17, 17, 17, 0.08)",
              glow: "0 12px 40px rgba(54,55,58,.12)",
            },
          },
        },
      };
   
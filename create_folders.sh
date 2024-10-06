#!/bin/bash

# Create the main project structure

# Create subdirectories inside src
mkdir -p src/{assets,components,pages,services,context,hooks,theme,utils}

# Create example files in src/components directory
touch src/components/{Button.tsx,Card.tsx,Navbar.tsx,Footer.tsx,CoinListItem.tsx}

# Create example files in src/pages directory
touch src/pages/{Home.tsx,CoinDetails.tsx,Portfolio.tsx,Register.tsx,Login.tsx,NotFound.tsx}

# Create example files in src/services directory
touch src/services/{coinService.ts,authService.ts,portfolioService.ts}

# Create files in src/context directory
touch src/context/{AuthContext.tsx,ThemeContext.tsx}

# Create files in src/hooks directory
touch src/hooks/{useAuth.ts,useFetch.ts}

# Create files in src/theme directory
touch src/theme/theme.ts

# Create files in src/utils directory
touch src/utils/{formatCurrency.ts,calculateProfit.ts,validators.ts}

echo "Project structure created successfully!"

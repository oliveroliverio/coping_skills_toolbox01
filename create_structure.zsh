#!/bin/zsh

# Ensure the main directories exist
mkdir -p src/app src/components/ui

# Create the route directories and their page.tsx files
routes=(
  "support"
  "relapse-prevention"
  "inspiration"
  "comfort"
  "joy"
  "breathing"
  "affirmations"
  "creative"
  "self-care"
)

for route in $routes; do
  mkdir -p "src/app/$route"
  touch "src/app/$route/page.tsx"
done

# Create the main app files
touch src/app/page.tsx
touch src/app/layout.tsx

# Create the component files
touch src/components/page.tsx
touch src/components/ui/card.tsx
touch src/components/ui/button.tsx

echo "Folder structure updated successfully!"
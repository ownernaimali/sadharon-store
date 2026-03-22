#!/bin/bash

# 1. Stage all changes
git add .

# 2. Commit with your fixed message
git commit -m "img add"

# 3. Push to your repository
git push

# 4. Deploy only hosting to Firebase
firebase deploy --only hosting

echo "🚀 Process complete: Added, committed, pushed, and deployed!"

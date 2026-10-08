🔐 Password Generator

A simple and interactive **Password Generator** built with **React.js**.  
It allows users to generate random passwords with a customizable length and optional numbers and symbols.

🚀 Features

- 🔑 Generate random passwords
- 📏 Customize password length from **6 to 25 characters**
- 🔢 Option to include numbers
- 🔣 Option to include symbols
- 📋 Copy generated password to clipboard
- ✅ Shows copy confirmation
- ⚡ Password automatically regenerates when options are changed
- 🎨 Simple and lightweight React interface

## ⚙️ How It Works

The application starts with a default password length of **8 characters**.

Users can:

1. Adjust the password length using the range slider.
2. Enable **Allow Num** to include numbers.
3. Enable **Allow Symbol** to include special characters.
4. Copy the generated password using the **Copy Password** button.

Whenever the length, numbers, or symbols options are changed, `useEffect()` automatically generates a new password.

## 🧠 React Concepts Used

### `useState`

State is used to manage:

- Password length
- Generated password
- Number inclusion
- Symbol inclusion
- Copy status

Example:

```javascript
const [length, setLength] = useState(8)
const [password, setPassword] = useState("")
const [allowNum, setAllowNum] = useState(false)
const [allowSym, setAllowSym] = useState(false)
```

### `useEffect`

`useEffect` regenerates the password whenever any password-generation option changes:

```javascript
useEffect(() => {
  pass()
}, [length, allowNum, allowSym])
```

### Clipboard API

The generated password can be copied using:

```javascript
navigator.clipboard.writeText(password)
```

## 👨‍💻 Author

**Vinayak Sharma**

Computer Science Engineering Student  
Interested in Software Development, AI & Machine Learning.

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

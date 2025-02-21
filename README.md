# 📚 DarkLit: Book Haven

🌙 **DarkLit: Book Haven** is a beautifully designed, dark-themed website that dynamically displays book details using **XML, JavaScript, and DTD validation**.  

## 🚀 Features

✔ **Dark Mode Theme**  
✔ **Elegant Fonts (Playfair Display & Poppins)**  
✔ **Book Cards with Hover Effects**  
✔ **XML Parsing & Dynamic Content Loading**  
✔ **DTD Validation for XML Structure**  

## 📁 Folder Structure

```
📂 DarkLit-Book-Haven
 ├── 📄 index.html   (Main webpage)
 ├── 📄 styles.css   (CSS for styling)
 ├── 📄 script.js    (JavaScript to fetch XML data)
 ├── 📄 books.xml    (XML file containing book data)
 ├── 📄 books.dtd    (DTD file to validate XML)
 ├── 📄 README.md    (Project documentation)
```

## 🔧 How to Run the Project

1. **Clone the Repository**  
   ```sh
   git clone https://github.com/Vidhi-bhutia/DarkLit-Book-Haven.git
   cd DarkLit-Book-Haven
   ```

2. **Open `index.html` in a browser**  
   Simply double-click `index.html` or use **Live Server** in VS Code.

## 🌍 Live Demo  
Deploy this project on **GitHub Pages** and add your link here:  
➡ [Live Demo](https://Vidhi-bhutia.github.io/DarkLit-Book-Haven/)  

## 💡 How It Works

- `index.html` loads and fetches `books.xml`.  
- `script.js` parses the XML and dynamically creates book cards.  
- `styles.css` applies a dark theme, stylish fonts, and animations.  
- `books.dtd` ensures `books.xml` follows the correct format.  

## 📜 XML & DTD Example

### `books.xml`
```xml
<!DOCTYPE bookstore SYSTEM "books.dtd">
<bookstore>
    <book>
        <title>The Great Gatsby</title>
        <author>F. Scott Fitzgerald</author>
        <isbn>9780743273565</isbn>
        <publisher>Scribner</publisher>
        <edition>1st</edition>
        <price>10.99</price>
    </book>
</bookstore>
```

### `books.dtd`
```dtd
<!ELEMENT bookstore (book+)>  
<!ELEMENT book (title, author, isbn, publisher, edition, price)>  
<!ELEMENT title (#PCDATA)>  
<!ELEMENT author (#PCDATA)>  
<!ELEMENT isbn (#PCDATA)>  
<!ELEMENT publisher (#PCDATA)>  
<!ELEMENT edition (#PCDATA)>  
<!ELEMENT price (#PCDATA)>  
```

## 🛠️ Tech Stack

- **HTML** (Structure)
- **CSS** (Dark Mode Styling)
- **JavaScript** (Fetch & Display XML Data)
- **XML** (Book Data)
- **DTD** (Validation)

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo, submit issues, or create pull requests.   

## 💬 Connect with Me

🔗 [LinkedIn](https://linkedin.com/in/vidhi-bhutia)  
🐦 [Twitter](https://twitter.com/VidhiBhutia_)  

🎉 **Happy Coding!** 🚀📚

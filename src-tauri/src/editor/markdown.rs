use html2md_rs::to_md::safe_from_html_to_md;
use serde::{Deserialize, Serialize};
use std::fs;
use std::io;

#[derive(Serialize, Deserialize, Debug)]
pub struct Content {
    html: String,
}

impl Content {
    fn convert_html_to_md(&self) -> String {
        let markdown = safe_from_html_to_md(self.html.to_string());
        match markdown {
            Ok(md) => md,
            Err(e) => e.to_string(),
        }
    }
}

#[tauri::command]
pub fn save_markdown(content: Content) -> String {
    println!("Converting HTML to Markdown...");
    let md = content.convert_html_to_md();

    let path = "output.md";

    fs::write(path, &md).unwrap();

    md
}

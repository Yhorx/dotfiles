vim.g.mapleader = " "

local keymap = vim.keymap -- for conciseness

keymap.set("i", "jk", "<ESC>", { desc = "Exit insert mode with jk" })
keymap.set("n", "<A-Down>", "<cmd>m .+1<CR>==", { silent = true }) --Move a line to up
keymap.set("n", "<A-Up>", "<cmd>m .-2<CR>==", { silent = true }) --Move a line to down
keymap.set("v", "<A-j>", ":m '>+1<CR>gv=gv", { silent = true }) --Move a block to up
keymap.set("v", "<A-k>", ":m '<-2<CR>gv=gv", { silent = true }) --Move to block to down
keymap.set("n", "<C-a>", "ggVG", { noremap = true, silent = true }) --Select all text
keymap.set("n", "<Esc>", "<cmd>noh<CR>", { desc = "Clear search highlight" }) --Disabled highlight in search
keymap.set("n", "n", "nzzzv") --establish cursor highlight in search
keymap.set("n", "N", "Nzzzv") --establish cursor highlight in search

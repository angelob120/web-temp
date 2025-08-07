// Enhanced Application Logic with Image Collection and Pexels Integration

// Background image URLs
const backgroundImages = [
    'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/68899d9c6ebc300b8440e6c3.png',
    'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/68899d9c8934ce59d10262ec.png',
    'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/68899d9cc625b882404ee19b.png',
    'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/68899d9cb67b6627c9852f43.png',
    'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/68899d9c8934ce2f300262eb.png',
    'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/68899d9cc625b86a964ee19c.png',
    'https://assets.cdn.filesafe.space/piZS2wwfdxSMff0Ezyu6/media/20b16d39-8972-4b61-b3ae-47f2a04aa973.jpeg',
    'https://assets.cdn.filesafe.space/piZS2wwfdxSMff0Ezyu6/media/74cf7df4-9257-452b-8ac1-3afa08d75910.jpeg',
    'https://assets.cdn.filesafe.space/piZS2wwfdxSMff0Ezyu6/media/d9d1b626-ff5c-460d-b7c4-204b67b65ee6.jpeg',
    'https://assets.cdn.filesafe.space/piZS2wwfdxSMff0Ezyu6/media/edf12988-3afc-4073-9ec8-9b47d75a10f3.jpeg'
];

let currentClient = {
    name: '',
    service: '',
    phone: '',
    logo: null,
    images: [],
    primaryColor: '#22c55e',
    secondaryColor: '#059669',
    backgroundImage: null
};

let selectedTemplate = 1;

// Enhanced image collection
let collectedImages = [];

const elements = {
    companyName: document.getElementById('companyName'),
    serviceType: document.getElementById('serviceType'),
    phoneNumber: document.getElementById('phoneNumber'),
    imageUpload: document.getElementById('imageUpload'),
    imageGrid: document.getElementById('imageGrid'),
    backgroundGallery: document.getElementById('backgroundGallery'),
    previewContainer: document.getElementById('previewContainer'),
    pasteArea: document.getElementById('pasteArea'),
    hiddenPasteInput: document.getElementById('hiddenPasteInput'),
    backgroundPasteArea: document.getElementById('backgroundPasteArea'),
    hiddenBackgroundPasteInput: document.getElementById('hiddenBackgroundPasteInput'),
    websiteUrl: document.getElementById('websiteUrl'),
    pexelsSearch: document.getElementById('pexelsSearch'),
    googleImagesSearch: document.getElementById('googleImagesSearch'),
    contextMenu: document.getElementById('contextMenu')
};

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Basic form listeners
    elements.companyName.addEventListener('input', e => updateClient('name', e.target.value));
    elements.serviceType.addEventListener('input', e => updateClient('service', e.target.value));
    elements.phoneNumber.addEventListener('input', e => updateClient('phone', e.target.value));
    elements.imageUpload.addEventListener('change', handleImageUpload);

    // Background upload listener
    const backgroundUpload = document.getElementById('backgroundUpload');
    if (backgroundUpload) {
        backgroundUpload.addEventListener('change', handleBackgroundUpload);
    }

    // Template buttons
    document.querySelectorAll('.template-btn').forEach(btn =>
        btn.addEventListener('click', () => selectTemplate(parseInt(btn.dataset.template)))
    );

    // Initialize background gallery and preview
    if (elements.backgroundGallery) {
        renderBackgroundGallery();
    }
    
    // Initialize background preview
    updateBackgroundPreview();

    // Setup image collection functionality
    setupImageCollection();
    
    // Setup background image collection functionality
    setupBackgroundImageCollection();
    
    // Setup context menu
    setupContextMenu();
    
    updatePreview();
});

// Setup image collection functionality
function setupImageCollection() {
    // Paste event listener
    document.addEventListener('paste', handlePaste);
    
    // Focus handling for paste area
    elements.pasteArea.addEventListener('click', function() {
        elements.hiddenPasteInput.focus();
    });

    // Drag styling
    elements.pasteArea.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    elements.pasteArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        if (!this.contains(e.relatedTarget)) {
            this.classList.remove('dragover');
        }
    });

    // Add drag and drop handlers
    elements.pasteArea.addEventListener('dragover', handleDragOver);
    elements.pasteArea.addEventListener('drop', handleDrop);

    // URL input handling
    elements.websiteUrl.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            openImageCollectionPopup();
        }
    });

    // Pexels search input handling
    elements.pexelsSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            openPexelsImageCollection();
        }
    });

    // Google Images search input handling
    elements.googleImagesSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            openGoogleImagesCollection();
        }
    });
}

// Setup background image collection functionality
function setupBackgroundImageCollection() {
    const backgroundPasteArea = document.getElementById('backgroundPasteArea');
    const hiddenBackgroundPasteInput = document.getElementById('hiddenBackgroundPasteInput');
    
    if (!backgroundPasteArea || !hiddenBackgroundPasteInput) return;
    
    // Background paste event listener for the specific input
    hiddenBackgroundPasteInput.addEventListener('paste', handleBackgroundPaste);
    
    // Focus handling for background paste area
    backgroundPasteArea.addEventListener('click', function() {
        hiddenBackgroundPasteInput.focus();
    });

    // Drag and drop for background paste area
    backgroundPasteArea.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    backgroundPasteArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        if (!this.contains(e.relatedTarget)) {
            this.classList.remove('dragover');
        }
    });

    backgroundPasteArea.addEventListener('dragover', handleBackgroundDragOver);
    backgroundPasteArea.addEventListener('drop', handleBackgroundDrop);
}

// Image Collection Popup
function openImageCollectionPopup() {
    const url = elements.websiteUrl.value.trim();
    
    if (!url) {
        showNotification('⚠️ Please enter a URL first', 'warning');
        return;
    }

    // Add https:// if missing
    const finalUrl = url.startsWith('http') ? url : 'https://' + url;
    
    try {
        // Open website directly in new window - NO IFRAME needed
        const popup = window.open(finalUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes,toolbar=yes,location=yes');
        
        if (!popup || popup.closed || typeof popup.closed == 'undefined') {
            showNotification('⚠️ Popup blocked! Please enable popups for this site.', 'warning');
            return;
        }

        popup.focus();
        showNotification('✅ Website opened directly! Right-click images to copy, then paste in main window.');
        
    } catch (error) {
        console.error('Popup error:', error);
        showNotification('⚠️ Popup blocked! Please enable popups for this site.', 'warning');
    }
}

// Pexels Image Collection Popup
function openPexelsImageCollection(mode = 'search') {
    let finalUrl;
    
    if (mode === 'browse') {
        // Open popular/curated photos
        finalUrl = 'https://www.pexels.com/';
    } else {
        // Search mode
        const searchTerm = elements.pexelsSearch.value.trim();
        if (!searchTerm) {
            finalUrl = 'https://www.pexels.com/';
        } else {
            finalUrl = `https://www.pexels.com/search/${encodeURIComponent(searchTerm)}/`;
        }
    }
    
    try {
        const popup = window.open('', '_blank', 'width=1400,height=900,scrollbars=yes,resizable=yes,toolbar=yes,location=yes');
        
        if (!popup || popup.closed || typeof popup.closed == 'undefined') {
            showNotification('⚠️ Popup blocked! Please enable popups for this site.', 'warning');
            return;
        }

        // Create enhanced popup content for Pexels - NO SANDBOX RESTRICTIONS FOR FULL FUNCTIONALITY
        popup.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Pexels Image Collection</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { 
                        margin: 0; 
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                        background: #f5f5f5;
                    }
                    .frame-container { 
                        margin-top: 0; 
                        height: 100vh;
                    }
                    iframe { 
                        width: 100%; 
                        height: 100%; 
                        border: none;
                        background: white;
                    }
                    .loading {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                        color: #666;
                    }
                    .spinner {
                        border: 3px solid #f3f3f3;
                        border-top: 3px solid #05a081;
                        border-radius: 50%;
                        width: 35px;
                        height: 35px;
                        animation: spin 1s linear infinite;
                        margin: 0 auto 15px;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            </head>
            <body>
                <div class="frame-container">
                    <div class="loading" id="loading">
                        <div class="spinner"></div>
                        <div>Loading Pexels...</div>
                    </div>
                    <iframe src="${finalUrl}" 
                            onload="document.getElementById('loading').style.display='none'">
                    </iframe>
                </div>
            </body>
            </html>
        `);
        
        popup.focus();
        
        if (mode === 'browse') {
            showNotification('🏞️ Pexels opened! Right-click photos to copy, then paste in main window.');
        } else {
            const searchTerm = elements.pexelsSearch.value.trim();
            if (searchTerm) {
                showNotification(`🔍 Searching Pexels for "${searchTerm}". Right-click images to copy!`);
            } else {
                showNotification('🏞️ Pexels opened! Right-click images to copy, then paste in main window.');
            }
        }
        
    } catch (error) {
        console.error('Pexels popup error:', error);
        showNotification('⚠️ Popup blocked! Please enable popups for this site.', 'warning');
    }
}

// Google Images Collection Popup
function openGoogleImagesCollection(mode = 'search') {
    let finalUrl;
    
    if (mode === 'tools') {
        // Open Google Images with usage rights filter
        const searchTerm = elements.googleImagesSearch.value.trim();
        if (!searchTerm) {
            finalUrl = 'https://images.google.com/advanced_image_search';
        } else {
            finalUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}&tbm=isch&tbs=sur:fmc`;
        }
    } else {
        // Regular search mode
        const searchTerm = elements.googleImagesSearch.value.trim();
        if (!searchTerm) {
            finalUrl = 'https://images.google.com/';
        } else {
            finalUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}&tbm=isch`;
        }
    }
    
    try {
        // Open Google Images directly in new window - NO IFRAME needed
        const popup = window.open(finalUrl, '_blank', 'width=1400,height=900,scrollbars=yes,resizable=yes,toolbar=yes,location=yes');
        
        if (!popup || popup.closed || typeof popup.closed == 'undefined') {
            showNotification('⚠️ Popup blocked! Please enable popups for this site.', 'warning');
            return;
        }

        popup.focus();
        
        if (mode === 'tools') {
            const searchTerm = elements.googleImagesSearch.value.trim();
            if (searchTerm) {
                showNotification(`🛠️ Google Images opened for "${searchTerm}" with usage rights filter. Right-click images to copy!`);
            } else {
                showNotification('🛠️ Google Images Advanced Search opened with usage rights options!');
            }
        } else {
            const searchTerm = elements.googleImagesSearch.value.trim();
            if (searchTerm) {
                showNotification(`🔍 Google Images opened for "${searchTerm}". Right-click images to copy!`);
            } else {
                showNotification('🔍 Google Images opened! Search for images and right-click to copy.');
            }
        }
        
    } catch (error) {
        console.error('Google Images popup error:', error);
        showNotification('⚠️ Popup blocked! Please enable popups for this site.', 'warning');
    }
}

// Setup context menu functionality
function setupContextMenu() {
    // Initialize tracking variable
    window.lastRightClickedArea = null;
    
    // Add right-click listeners to both paste areas
    elements.pasteArea.addEventListener('contextmenu', function(e) {
        window.lastRightClickedArea = 'gmb';
        showContextMenu(e);
    });
    
    const backgroundPasteArea = document.getElementById('backgroundPasteArea');
    if (backgroundPasteArea) {
        backgroundPasteArea.addEventListener('contextmenu', function(e) {
            window.lastRightClickedArea = 'background';
            showContextMenu(e);
        });
    }
    
    // Hide context menu when clicking elsewhere
    document.addEventListener('click', function(e) {
        const contextMenu = document.getElementById('contextMenu');
        if (!contextMenu.contains(e.target)) {
            hideContextMenu();
        }
    });

    // Hide context menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideContextMenu();
        }
    });
}

// Show context menu on right-click
function showContextMenu(event) {
    event.preventDefault();
    
    const contextMenu = document.getElementById('contextMenu');
    
    // Update context menu text based on which area was clicked
    const contextMenuItem = contextMenu.querySelector('.context-menu-item');
    if (window.lastRightClickedArea === 'background') {
        contextMenuItem.innerHTML = '🖼️ Paste Background Image';
    } else {
        contextMenuItem.innerHTML = '📷 Paste GMB Image';
    }
    
    const x = event.clientX;
    const y = event.clientY;
    
    // Position the menu at cursor location
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.style.display = 'block';
    
    // Adjust position if menu goes off-screen
    const rect = contextMenu.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    if (rect.right > windowWidth) {
        contextMenu.style.left = (x - rect.width) + 'px';
    }
    
    if (rect.bottom > windowHeight) {
        contextMenu.style.top = (y - rect.height) + 'px';
    }
}

// Hide context menu
function hideContextMenu() {
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display = 'none';
}

// Paste from context menu
function pasteFromContextMenu() {
    hideContextMenu();
    
    // Check which area was right-clicked
    if (window.lastRightClickedArea === 'background') {
        // Handle background image pasting from clipboard
        attemptBackgroundClipboardPaste();
        return;
    }
    
    // Default behavior for GMB image collection
    attemptGMBClipboardPaste();
}

// Attempt to paste background image from clipboard
function attemptBackgroundClipboardPaste() {
    if (navigator.clipboard && navigator.clipboard.read) {
        navigator.clipboard.read().then(clipboardItems => {
            let hasImage = false;
            for (const clipboardItem of clipboardItems) {
                for (const type of clipboardItem.types) {
                    if (type.startsWith('image/')) {
                        hasImage = true;
                        clipboardItem.getType(type).then(blob => {
                            setBackgroundImageFromFile(blob);
                            showNotification('📋 Background image pasted from clipboard!');
                        }).catch(err => {
                            console.error('Error reading clipboard:', err);
                            showNotification('⚠️ Could not read image from clipboard', 'warning');
                        });
                        return;
                    }
                }
            }
            if (!hasImage) {
                showNotification('⚠️ No images found in clipboard', 'warning');
            }
        }).catch(err => {
            console.error('Error accessing clipboard:', err);
            showNotification('⚠️ Please use Ctrl+V to paste background images', 'warning');
        });
    } else {
        showNotification('⚠️ Please use Ctrl+V to paste background images', 'warning');
    }
}

// Attempt to paste GMB images from clipboard
function attemptGMBClipboardPaste() {
    if (navigator.clipboard && navigator.clipboard.read) {
        navigator.clipboard.read().then(clipboardItems => {
            let hasImage = false;
            for (const clipboardItem of clipboardItems) {
                for (const type of clipboardItem.types) {
                    if (type.startsWith('image/')) {
                        hasImage = true;
                        clipboardItem.getType(type).then(blob => {
                            addImageToCollection(blob);
                            showNotification('📋 GMB image pasted from clipboard!');
                        }).catch(err => {
                            console.error('Error reading clipboard:', err);
                            showNotification('⚠️ Could not read image from clipboard', 'warning');
                        });
                        return;
                    }
                }
            }
            if (!hasImage) {
                showNotification('⚠️ No images found in clipboard', 'warning');
            }
        }).catch(err => {
            console.error('Error accessing clipboard:', err);
            showNotification('⚠️ Please use Ctrl+V to paste GMB images', 'warning');
        });
    } else {
        showNotification('⚠️ Please use Ctrl+V to paste GMB images', 'warning');
    }
}

// Handle paste events for GMB images only
function handlePaste(event) {
    // Only handle paste for GMB image collection areas, not input fields or background
    const target = event.target;
    const isGMBImageArea = target === elements.hiddenPasteInput || elements.pasteArea.contains(target);
    
    // If pasting into a regular input field or background area, allow normal behavior
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        if (!isGMBImageArea) {
            return; // Allow normal paste behavior for input fields
        }
    }
    
    // Only prevent default for GMB image collection areas
    if (!isGMBImageArea) {
        return;
    }
    
    event.preventDefault();
    
    const items = event.clipboardData.items;
    let hasImage = false;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        
        if (item.type.indexOf('image') !== -1) {
            hasImage = true;
            const file = item.getAsFile();
            addImageToCollection(file);
        } else if (item.type === 'text/plain') {
            item.getAsString(function(text) {
                if (isImageUrl(text)) {
                    addImageFromUrl(text);
                }
            });
        }
    }

    if (hasImage) {
        showNotification('📋 GMB image pasted successfully!');
    }
}

// Handle drag over for GMB images
function handleDragOver(event) {
    event.preventDefault();
}

// Handle drop for GMB images only
function handleDrop(event) {
    event.preventDefault();
    
    elements.pasteArea.classList.remove('dragover');

    const files = event.dataTransfer.files;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
            addImageToCollection(file);
        }
    }

    if (files.length > 0) {
        showNotification(`📁 ${files.length} GMB image(s) added!`);
    }
}

// Handle background image paste specifically
function handleBackgroundPaste(event) {
    // Only handle if this is specifically the background paste input
    const target = event.target;
    if (target !== elements.hiddenBackgroundPasteInput) {
        return; // Allow normal paste behavior for other inputs
    }
    
    event.preventDefault();
    
    const items = event.clipboardData.items;
    let hasImage = false;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        
        if (item.type.indexOf('image') !== -1) {
            hasImage = true;
            const file = item.getAsFile();
            setBackgroundImageFromFile(file);
            break; // Only use the first image for background
        } else if (item.type === 'text/plain') {
            item.getAsString(function(text) {
                if (isImageUrl(text)) {
                    setBackgroundImageFromUrl(text);
                }
            });
        }
    }

    if (hasImage) {
        showNotification('🖼️ Background image pasted successfully!');
    }
}

function handleBackgroundDragOver(event) {
    event.preventDefault();
}

function handleBackgroundDrop(event) {
    event.preventDefault();
    
    const backgroundPasteArea = document.getElementById('backgroundPasteArea');
    if (backgroundPasteArea) {
        backgroundPasteArea.classList.remove('dragover');
    }

    const files = event.dataTransfer.files;
    
    if (files.length > 0) {
        const file = files[0]; // Only use the first file for background
        if (file.type.startsWith('image/')) {
            setBackgroundImageFromFile(file);
            showNotification('🖼️ Background image set from drag & drop!');
        } else {
            showNotification('⚠️ Please drop an image file for background', 'warning');
        }
    }
}

function setBackgroundImageFromFile(file) {
    if (!file.type.startsWith('image/')) {
        showNotification('⚠️ Please select an image file for background', 'warning');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        currentClient.backgroundImage = e.target.result;
        updateBackgroundPreview();
        updatePreview();
    };
    reader.readAsDataURL(file);
}

function setBackgroundImageFromUrl(url) {
    currentClient.backgroundImage = url;
    updateBackgroundPreview();
    updatePreview();
    showNotification('🔗 Background image set from URL!');
}

// Add image to collection
function addImageToCollection(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imageData = {
            id: Date.now() + Math.random(),
            src: e.target.result,
            name: file.name || `image-${currentClient.images.length + 1}`,
            size: file.size || 'Unknown',
            type: file.type || 'image/*',
            timestamp: new Date()
        };
        
        // Add to both collections
        collectedImages.push(imageData);
        currentClient.images.push(e.target.result);
        
        updateImageGrid();
        updatePreview();
    };
    
    reader.readAsDataURL(file);
}

// Add image from URL
function addImageFromUrl(url) {
    const imageData = {
        id: Date.now() + Math.random(),
        src: url,
        name: `url-image-${currentClient.images.length + 1}`,
        size: 'Unknown',
        type: 'image/url',
        timestamp: new Date()
    };
    
    collectedImages.push(imageData);
    currentClient.images.push(url);
    
    updateImageGrid();
    updatePreview();
    showNotification('🔗 Image URL added!');
}

// Check if text is image URL
function isImageUrl(text) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];
    const url = text.trim().toLowerCase();
    return url.startsWith('http') && imageExtensions.some(ext => url.includes(ext));
}

// Focus GMB paste area
function focusPasteArea() {
    elements.hiddenPasteInput.focus();
    showNotification('📋 Ready to paste GMB images! Use Ctrl+V');
}

// Focus background paste area
function focusBackgroundPasteArea() {
    const hiddenBackgroundPasteInput = document.getElementById('hiddenBackgroundPasteInput');
    if (hiddenBackgroundPasteInput) {
        hiddenBackgroundPasteInput.focus();
        showNotification('🖼️ Ready to paste background image! Use Ctrl+V');
    }
}

// Clear all GMB images
function clearAllImages() {
    if (currentClient.images.length === 0) {
        showNotification('No GMB images to clear');
        return;
    }
    
    if (confirm(`Clear all ${currentClient.images.length} GMB images?`)) {
        currentClient.images = [];
        collectedImages = [];
        updateImageGrid();
        updatePreview();
        showNotification('🗑️ All GMB images cleared');
    }
}

// Download all GMB images
function downloadAllImages() {
    if (currentClient.images.length === 0) {
        showNotification('No GMB images to download');
        return;
    }

    currentClient.images.forEach((imageSrc, index) => {
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = imageSrc;
            link.download = `gmb-image-${index + 1}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, index * 200);
    });
    
    showNotification(`💾 Downloading ${currentClient.images.length} GMB images...`);
}

// Download single image
function downloadImage(index) {
    const imageSrc = currentClient.images[index];
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `gmb-image-${index + 1}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification(`💾 Downloaded GMB image ${index + 1}`);
}

// Copy image URL
function copyImageUrl(url) {
    navigator.clipboard.writeText(url).then(() => {
        showNotification('📋 Image URL copied!');
    });
}

// View full image
function viewFullImage(src, name) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <img src="${src}">
            <div class="modal-info">${name}</div>
            <div class="modal-close">Click anywhere to close</div>
        </div>
    `;
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
}

// Handle background upload
function handleBackgroundUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        showNotification('⚠️ Please select an image file', 'warning');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        currentClient.backgroundImage = e.target.result;
        updateBackgroundPreview();
        updatePreview();
        showNotification('🖼️ Background updated successfully!');
    };
    reader.readAsDataURL(file);
}

// Reset to default background
function resetToDefaultBackground() {
    currentClient.backgroundImage = null;
    updateBackgroundPreview();
    updatePreview();
    showNotification('🔄 Background reset to default');
}

// Update background preview
function updateBackgroundPreview() {
    const preview = document.getElementById('backgroundPreview');
    const img = document.getElementById('backgroundPreviewImg');
    const defaultText = document.getElementById('backgroundPreviewDefault');
    
    if (currentClient.backgroundImage) {
        img.src = currentClient.backgroundImage;
        img.style.display = 'block';
        defaultText.style.display = 'none';
        preview.classList.add('has-custom');
    } else {
        img.style.display = 'none';
        defaultText.style.display = 'flex';
        preview.classList.remove('has-custom');
    }
}

// Show notifications
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    if (type === 'warning') {
        notification.classList.add('warning');
    }
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function updateClient(key, value) {
    currentClient[key] = value;
    updatePreview();
}

function handleImageUpload(e) {
    Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = ev => {
            currentClient.images.push(ev.target.result);
            
            // Also add to collection
            const imageData = {
                id: Date.now() + Math.random(),
                src: ev.target.result,
                name: file.name,
                size: file.size,
                type: file.type,
                timestamp: new Date()
            };
            collectedImages.push(imageData);
            
            updateImageGrid();
            updatePreview();
        };
        reader.readAsDataURL(file);
    });
}

function updateImageGrid() {
    elements.imageGrid.innerHTML = currentClient.images.map((img, idx) => `
        <div class="image-item">
            <img src="${img}" alt="Upload ${idx + 1}" onclick="viewFullImage('${img}', 'GMB Image ${idx + 1}')" />
            <div class="image-info">
                <div class="image-name">GMB Image ${idx + 1}</div>
            </div>
            <div class="image-actions">
                <button class="action-btn download" onclick="downloadImage(${idx})" title="Download">💾</button>
                <button class="action-btn copy" onclick="copyImageUrl('${img}')" title="Copy URL">📋</button>
                <button class="action-btn remove" onclick="removeImage(${idx})" title="Remove">×</button>
            </div>
        </div>
    `).join('');
}

function removeImage(index) {
    currentClient.images.splice(index, 1);
    collectedImages.splice(index, 1);
    updateImageGrid();
    updatePreview();
    showNotification('🗑️ GMB image removed');
}

function renderBackgroundGallery() {
    if (!elements.backgroundGallery) return;
    
    elements.backgroundGallery.innerHTML = backgroundImages.map((url, idx) => `
        <div class="background-option ${currentClient.backgroundImage === url ? 'selected' : ''}"
             onclick="selectBackgroundImage('${url}')">
            <img src="${url}" alt="Background ${idx + 1}" />
        </div>
    `).join('');
}

function selectBackgroundImage(url) {
    currentClient.backgroundImage = url;
    renderBackgroundGallery();
    updatePreview();
}

function selectTemplate(num) {
    selectedTemplate = num;
    document.querySelectorAll('.template-btn').forEach(btn =>
        btn.classList.toggle('active', parseInt(btn.dataset.template) === num)
    );
    updatePreview();
}

function updatePreview() {
    const templates = {
        1: generateTemplate1,
        2: generateTemplate2,
        3: generateTemplate3,
        4: generateTemplate4,
        5: generateTemplate5,
        6: generateTemplate6,
        7: generateTemplate7,
        8: generateTemplate8,
        9: generateTemplate9,
        10: generateTemplate10
    };
    const html = templates[selectedTemplate]();

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.srcdoc = html;

    iframe.onload = () => {
        const doc = iframe.contentDocument;
        const styleTag = doc.createElement('style');
        styleTag.textContent = '.why-image::before{content:none!important;}';
        doc.head.appendChild(styleTag);

        const selectors = [
            '.experience-image','.image-placeholder',
            '.projects-image','.contact-image',
            '.services-image','.why-image',
            '.image-container','.service-image'
        ];

        selectors.forEach(sel => {
            doc.querySelectorAll(sel).forEach((el, idx) => {
                const src = currentClient.images[idx];
                
                if (src) {
                    const img = doc.createElement('img');
                    img.src = src;
                    img.alt = 'Business Image';
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.objectFit = 'cover';
                    img.style.objectPosition = 'center';
                    img.style.borderRadius = 'inherit';
                    el.innerHTML = ''; 
                    el.appendChild(img);
                }
            });
        });
    };

    elements.previewContainer.innerHTML = '';
    elements.previewContainer.appendChild(iframe);
}

async function downloadScreenshot() {
    try {
        const iframe = elements.previewContainer.querySelector('iframe');
        if (!iframe) throw new Error('Preview not loaded yet');

        const win = iframe.contentWindow;
        const doc = iframe.contentDocument || win.document;
        const target = doc.body;

        if (selectedTemplate === 10) {
            const cleanup = doc.createElement('style');
            cleanup.textContent = `
                .stat-number,
                .section-badge,
                .feature-icon,
                .hero::before,
                .image-container::before,
                .recent-work::after,
                .work-image::before {
                    background: none !important;
                    box-shadow: none !important;
                }
                .hero::before,
                .service-section::before {
                    display: none !important;
                }
                .stat-number,
                .feature-text,
                input,
                select,
                textarea,
                .highlight {
                    -webkit-text-fill-color: inherit !important;
                    background-clip: initial !important;
                    color: inherit !important;
                }
                .form-title {
                    color: white !important;
                }
            `;
            doc.head.appendChild(cleanup);
        }

        if (selectedTemplate === 4) {
            const bgFix = doc.createElement('style');
            bgFix.textContent = `
                body {
                    background-color: #ffffff !important;
                }
            `;
            doc.head.appendChild(bgFix);
        }

        win.scrollTo(0, 0);

        const canvas = await html2canvas(target, {
            width: target.scrollWidth,
            height: target.scrollHeight,
            useCORS: true,
            allowTaint: true,
            scrollX: 0,
            scrollY: 0,
            backgroundColor: null
        });

        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${currentClient.name || 'website'}-full-preview.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 'image/png');
    } catch (err) {
        console.error('Screenshot failed:', err);
        alert('Screenshot download failed. Please try again.');
    }
}
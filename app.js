// Main Application Logic

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

const elements = {
    companyName: document.getElementById('companyName'),
    serviceType: document.getElementById('serviceType'),
    phoneNumber: document.getElementById('phoneNumber'),
    imageUpload: document.getElementById('imageUpload'),
    imageGrid: document.getElementById('imageGrid'),
    backgroundGallery: document.getElementById('backgroundGallery'),
    previewContainer: document.getElementById('previewContainer')
};

elements.companyName.addEventListener('input', e => updateClient('name', e.target.value));
elements.serviceType.addEventListener('input', e => updateClient('service', e.target.value));
elements.phoneNumber.addEventListener('input', e => updateClient('phone', e.target.value));
elements.imageUpload.addEventListener('change', handleImageUpload);

document.querySelectorAll('.template-btn').forEach(btn =>
    btn.addEventListener('click', () => selectTemplate(parseInt(btn.dataset.template)))
);

function updateClient(key, value) {
    currentClient[key] = value;
    updatePreview();
}

function handleImageUpload(e) {
    Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = ev => {
            currentClient.images.push(ev.target.result);
            updateImageGrid();
            updatePreview();
        };
        reader.readAsDataURL(file);
    });
}

function updateImageGrid() {
    elements.imageGrid.innerHTML = currentClient.images.map((img, idx) => `
        <div class="image-item">
            <img src="${img}" alt="Upload ${idx + 1}" />
            <button class="remove-btn" onclick="removeImage(${idx})">×</button>
        </div>
    `).join('');
}

function removeImage(index) {
    currentClient.images.splice(index, 1);
    updateImageGrid();
    updatePreview();
}

function renderBackgroundGallery() {
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
            '.image-container'
        ];
        selectors.forEach(sel => {
            doc.querySelectorAll(sel).forEach((el, idx) => {
                const src = currentClient.images[idx];
                if (src) {
                    const img = doc.createElement('img');
                    img.src = src;
                    img.alt = 'Uploaded Image';
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

document.addEventListener('DOMContentLoaded', () => {
    renderBackgroundGallery();
    updatePreview();
});

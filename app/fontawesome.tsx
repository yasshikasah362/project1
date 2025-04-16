import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent fontawesome from adding its CSS automatically since Next.js does it differently
config.autoAddCss = false;

library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn);

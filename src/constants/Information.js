/**
 * @typedef {'Animations' | 'Backgrounds' | 'Components' | 'TextAnimations'} Category
 */
/**
 * The supported code/component variants for the registry system.
 * 
 * @type {readonly ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW']}
 */
export const VARIANTS = ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'];

/**
 * @typedef {'JS-CSS' | 'JS-TW' | 'TS-CSS' | 'TS-TW'} Variant
 */

/**
 * Type for all component metadata, including enforcement of the Category field.
 * 
 * @typedef {Object} ComponentMetadata
 * @property {string} videoUrl
 * @property {string} description
 * @property {Category} category
 * @property {string} name
 * @property {string} docsUrl
 * @property {string[]} tags
 * @property {Variant[]} [variants]
 * @property {Record<string, any>} [meta]
 */

/** 
 * @type {Record<string, ComponentMetadata>} 
 */
export const componentMetadata = {

  //! Animations -------------------------------------------------------------------------------------------------------------------------------

  'Animations/AnimatedContent': {
    videoUrl: '/assets/video/animatedcontent.webm',
    description: 'Wrapper that animates any children on scroll or mount with configurable direction, distance, duration, easing and disappear options.',
    category: 'Animations',
    name: 'AnimatedContent',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/animated-content',
    tags: []
  },
  'Animations/BlobCursor': {
    videoUrl: '/assets/video/blobcursor.webm',
    description: 'Organic blob cursor that smoothly follows the pointer with inertia and elastic morphing.',
    category: 'Animations',
    name: 'BlobCursor',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/blob-cursor',
    tags: []
  },
  'Animations/ClickSpark': {
    videoUrl: '/assets/video/clickspark.webm',
    description: 'Creates particle spark bursts at click position.',
    category: 'Animations',
    name: 'ClickSpark',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/click-spark',
    tags: []
  },
  'Animations/Crosshair': {
    videoUrl: '/assets/video/crosshair.webm',
    description: 'Custom crosshair cursor with tracking, and link hover effects.',
    category: 'Animations',
    name: 'Crosshair',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/crosshair',
    tags: []
  },
  'Animations/Cubes': {
    videoUrl: '/assets/video/cubes.webm',
    description: '3D rotating cube cluster. Supports auto-rotation or hover interaction.',
    category: 'Animations',
    name: 'Cubes',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/cubes',
    tags: []
  },
  'Animations/ElectricBorder': {
    videoUrl: '/assets/video/electricborder.webm',
    description: 'Jittery electric energy border with animated arcs, glow and adjustable intensity.',
    category: 'Animations',
    name: 'ElectricBorder',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/electric-border',
    tags: []
  },
  'Animations/FadeContent': {
    videoUrl: '/assets/video/fadecontent.webm',
    description: 'Simple directional fade / slide entrance / exit wrapper with threshold-based activation.',
    category: 'Animations',
    name: 'FadeContent',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/fade-content',
    tags: []
  },
  'Animations/GlareHover': {
    videoUrl: '/assets/video/glarehover.webm',
    description: 'Adds a realistic moving glare highlight on hover over any element.',
    category: 'Animations',
    name: 'GlareHover',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/glare-hover',
    tags: []
  },
  'Animations/GradualBlur': {
    videoUrl: '/assets/video/gradualblur.webm',
    description: 'Progressively un-blurs content based on scroll or trigger creating a cinematic reveal.',
    category: 'Animations',
    name: 'GradualBlur',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/gradual-blur',
    tags: []
  },
  'Animations/GhostCursor': {
    videoUrl: '/assets/video/ghostcursor.webm',
    description: 'Semi-transparent ghost cursor that smoothly follows the real cursor with a trailing effect.',
    category: 'Animations',
    name: 'GhostCursor',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/ghost-cursor',
    tags: []
  },
  'Animations/ImageTrail': {
    videoUrl: '/assets/video/imagetrail.webm',
    description: 'Cursor-based image trail with several built-in variants.',
    category: 'Animations',
    name: 'ImageTrail',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/image-trail',
    tags: []
  },
  'Animations/LogoLoop': {
    videoUrl: '/assets/video/logoloop.webm',
    description: 'Continuously looping marquee of brand or tech logos with seamless repeat and hover pause.',
    category: 'Animations',
    name: 'LogoLoop',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/logo-loop',
    tags: []
  },
  'Animations/Magnet': {
    videoUrl: '/assets/video/magnet.webm',
    description: 'Elements magnetically ease toward the cursor then settle back with spring physics.',
    category: 'Animations',
    name: 'Magnet',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/magnet',
    tags: []
  },
  'Animations/MagnetLines': {
    videoUrl: '/assets/video/magnetlines.webm',
    description: 'Animated field lines bend toward the cursor.',
    category: 'Animations',
    name: 'MagnetLines',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/magnet-lines',
    tags: []
  },
  'Animations/MetaBalls': {
    videoUrl: '/assets/video/metaballs.webm',
    description: 'Liquid metaball blobs that merge and separate with smooth implicit surface animation.',
    category: 'Animations',
    name: 'MetaBalls',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/meta-balls',
    tags: []
  },
  'Animations/MetallicPaint': {
    videoUrl: '/assets/video/metallicpaint.webm',
    description: 'Liquid metallic paint shader which can be applied to SVG elements.',
    category: 'Animations',
    name: 'MetallicPaint',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/metallic-paint',
    tags: []
  },
  'Animations/Noise': {
    videoUrl: '/assets/video/noise.webm',
    description: 'Animated film grain / noise overlay adding subtle texture and motion.',
    category: 'Animations',
    name: 'Noise',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/noise',
    tags: []
  },
  'Animations/PixelTrail': {
    videoUrl: '/assets/video/pixeltrail.webm',
    description: 'Pixelated cursor trail emitting fading squares with retro digital feel.',
    category: 'Animations',
    name: 'PixelTrail',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/pixel-trail',
    tags: []
  },
  'Animations/PixelTransition': {
    videoUrl: '/assets/video/pixeltransition.webm',
    description: 'Pixel dissolve transition for content reveal on hover.',
    category: 'Animations',
    name: 'PixelTransition',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/pixel-transition',
    tags: []
  },
  'Animations/Ribbons': {
    videoUrl: '/assets/video/ribbons.webm',
    description: 'Flowing responsive ribbons/cursor trail driven by physics and pointer motion.',
    category: 'Animations',
    name: 'Ribbons',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/ribbons',
    tags: []
  },
  'Animations/ShapeBlur': {
    videoUrl: '/assets/video/shapeblur.webm',
    description: 'Morphing blurred geometric shape. The effect occurs on hover.',
    category: 'Animations',
    name: 'ShapeBlur',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/shape-blur',
    tags: []
  },
  'Animations/SplashCursor': {
    videoUrl: '/assets/video/splashcursor.webm',
    description: 'Liquid splash burst at cursor with curling ripples and waves.',
    category: 'Animations',
    name: 'SplashCursor',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/splash-cursor',
    tags: []
  },
  'Animations/StarBorder': {
    videoUrl: '/assets/video/starborder.webm',
    description: 'Animated star / sparkle border orbiting content with twinkle pulses.',
    category: 'Animations',
    name: 'StarBorder',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/star-border',
    tags: []
  },
  'Animations/StickerPeel': {
    videoUrl: '/assets/video/stickerpeel.webm',
    description: 'Sticker corner lift + peel interaction using 3D transform and shadow depth.',
    category: 'Animations',
    name: 'StickerPeel',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/sticker-peel',
    tags: []
  },
  'Animations/TargetCursor': {
    videoUrl: '/assets/video/targetcursor.webm',
    description: 'A cursor follow animation with 4 corners that lock onto targets.',
    category: 'Animations',
    name: 'TargetCursor',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/target-cursor',
    tags: []
  },
  'Animations/LaserFlow': {
    videoUrl: '/assets/video/laserflow.webm',
    description: 'Dynamic laser light that flows onto a surface, customizable effect.',
    category: 'Animations',
    name: 'LaserFlow',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/laser-flow',
    tags: []
  },
  'Animations/Antigravity': {
    videoUrl: '/assets/video/antigravity.webm',
    description: '3D antigravity particle field that repels from the cursor with smooth motion.',
    category: 'Animations',
    name: 'Antigravity',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/antigravity',
    tags: []
  },
  'Animations/OrbitImages': {
    videoUrl: '/assets/video/orbitimages.webm',
    description: 'SVG Path customizable orbiting images effect',
    category: 'Animations',
    name: 'OrbitImages',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/orbit-images',
    tags: []
  },
  'Animations/MagicRings': {
    videoUrl: '/assets/video/magicrings.webm',
    description: 'Interactive magic rings effect with customizable parameters.',
    category: 'Animations',
    name: 'MagicRings',
    docsUrl: 'https://oi-orbuz.vercel.app/animations/magic-rings',
    tags: []
  },

  //! Text Animations -------------------------------------------------------------------------------------------------------------------------------

  'TextAnimations/AsciiText': {
    videoUrl: '/assets/video/asciitext.webm',
    description: 'Renders text with an animated ASCII background for a retro feel.',
    category: 'TextAnimations',
    name: 'ASCIIText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/ascii-text',
    tags: []
  },
  'TextAnimations/BlurText': {
    videoUrl: '/assets/video/blurtext.webm',
    description: 'Text starts blurred then crisply resolves for a soft-focus reveal effect.',
    category: 'TextAnimations',
    name: 'BlurText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/blur-text',
    tags: []
  },
  'TextAnimations/CircularText': {
    videoUrl: '/assets/video/circulartext.webm',
    description: 'Layouts characters around a circle with optional rotation animation.',
    category: 'TextAnimations',
    name: 'CircularText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/circular-text',
    tags: []
  },
  'TextAnimations/CountUp': {
    videoUrl: '/assets/video/countup.webm',
    description: 'Animated number counter supporting formatting and decimals.',
    category: 'TextAnimations',
    name: 'CountUp',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/count-up',
    tags: []
  },
  'TextAnimations/CurvedLoop': {
    videoUrl: '/assets/video/curvedloop.webm',
    description: 'Flowing looping text path along a customizable curve with drag interaction.',
    category: 'TextAnimations',
    name: 'CurvedLoop',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/curved-loop',
    tags: []
  },
  'TextAnimations/DecryptedText': {
    videoUrl: '/assets/video/decryptedtext.webm',
    description: 'Hacker-style decryption cycling random glyphs until resolving to real text.',
    category: 'TextAnimations',
    name: 'DecryptedText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/decrypted-text',
    tags: []
  },
  'TextAnimations/FallingText': {
    videoUrl: '/assets/video/fallingtext.webm',
    description: 'Characters fall with gravity + bounce creating a playful entrance.',
    category: 'TextAnimations',
    name: 'FallingText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/falling-text',
    tags: []
  },
  'TextAnimations/FuzzyText': {
    videoUrl: '/assets/video/fuzzytext.webm',
    description: 'Vibrating fuzzy text with controllable hover intensity.',
    category: 'TextAnimations',
    name: 'FuzzyText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/fuzzy-text',
    tags: []
  },
  'TextAnimations/GlitchText': {
    videoUrl: '/assets/video/glitchtext.webm',
    description: 'RGB split and distortion glitch effect with jitter effects.',
    category: 'TextAnimations',
    name: 'GlitchText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/glitch-text',
    tags: []
  },
  'TextAnimations/GradientText': {
    videoUrl: '/assets/video/gradienttext.webm',
    description: 'Animated gradient sweep across live text with speed and color control.',
    category: 'TextAnimations',
    name: 'GradientText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/gradient-text',
    tags: []
  },
  'TextAnimations/RotatingText': {
    videoUrl: '/assets/video/rotatingtext.webm',
    description: 'Cycles through multiple phrases with 3D rotate / flip transitions.',
    category: 'TextAnimations',
    name: 'RotatingText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/rotating-text',
    tags: []
  },
  'TextAnimations/ScrambledText': {
    videoUrl: '/assets/video/scrambledtext.webm',
    description: 'Detects cursor position and applies a distortion effect to text.',
    category: 'TextAnimations',
    name: 'ScrambledText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/scrambled-text',
    tags: []
  },
  'TextAnimations/ScrollFloat': {
    videoUrl: '/assets/video/scrollfloat.webm',
    description: 'Text gently floats / parallax shifts on scroll.',
    category: 'TextAnimations',
    name: 'ScrollFloat',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/scroll-float',
    tags: []
  },
  'TextAnimations/ScrollReveal': {
    videoUrl: '/assets/video/scrollreveal.webm',
    description: 'Text gently unblurs and reveals on scroll.',
    category: 'TextAnimations',
    name: 'ScrollReveal',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/scroll-reveal',
    tags: []
  },
  'TextAnimations/ScrollVelocity': {
    videoUrl: '/assets/video/scrollvelocity.webm',
    description: "Text marquee animatio - speed and distortion scale with user's scroll velocity.",
    category: 'TextAnimations',
    name: 'ScrollVelocity',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/scroll-velocity',
    tags: []
  },
  'TextAnimations/ShinyText': {
    videoUrl: '/assets/video/shinytext.webm',
    description: 'Metallic sheen sweeps across text producing a reflective highlight.',
    category: 'TextAnimations',
    name: 'ShinyText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/shiny-text',
    tags: []
  },
  'TextAnimations/SplitText': {
    videoUrl: '/assets/video/splittext.webm',
    description: 'Splits text into characters / words for staggered entrance animation.',
    category: 'TextAnimations',
    name: 'SplitText',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/split-text',
    tags: []
  },
  'TextAnimations/TextCursor': {
    videoUrl: '/assets/video/textcursor.webm',
    description: 'Make any text element follow your cursor, leaving a trail of copies behind it.',
    category: 'TextAnimations',
    name: 'TextCursor',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/text-cursor',
    tags: []
  },
  'TextAnimations/TextPressure': {
    videoUrl: '/assets/video/textpressure.webm',
    description: 'Characters scale / warp interactively based on pointer pressure zone.',
    category: 'TextAnimations',
    name: 'TextPressure',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/text-pressure',
    tags: []
  },
  'TextAnimations/TextType': {
    videoUrl: '/assets/video/texttype.webm',
    description: 'Typewriter effect with blinking cursor and adjustable typing cadence.',
    category: 'TextAnimations',
    name: 'TextType',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/text-type',
    tags: []
  },
  'TextAnimations/TrueFocus': {
    videoUrl: '/assets/video/truefocus.webm',
    description: 'Applies dynamic blur / clarity based over a series of words in order.',
    category: 'TextAnimations',
    name: 'TrueFocus',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/true-focus',
    tags: []
  },
  'TextAnimations/VariableProximity': {
    videoUrl: '/assets/video/variableproximity.webm',
    description: 'Letter styling changes continuously with pointer distance mapping.',
    category: 'TextAnimations',
    name: 'VariableProximity',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/variable-proximity',
    tags: []
  },
  'TextAnimations/Shuffle': {
    videoUrl: '/assets/video/shuffle.webm',
    description: 'Animated text reveal where characters shuffle before settling.',
    category: 'TextAnimations',
    name: 'Shuffle',
    docsUrl: 'https://oi-orbuz.vercel.app/text-animations/shuffle',
    tags: []
  },

  //! Components -------------------------------------------------------------------------------------------------------------------------------
  'Components/AnimatedList': {
    videoUrl: '/assets/video/animatedlist.webm',
    description: 'List items enter with staggered motion variants for polished reveals.',
    category: 'Components',
    name: 'AnimatedList',
    docsUrl: 'https://oi-orbuz.vercel.app/components/animated-list',
    tags: []
  },
  'Components/BounceCards': {
    videoUrl: '/assets/video/bouncecards.webm',
    description: 'Cards bounce that bounce in on mount.',
    category: 'Components',
    name: 'BounceCards',
    docsUrl: 'https://oi-orbuz.vercel.app/components/bounce-cards',
    tags: []
  },
  'Components/BubbleMenu': {
    videoUrl: '/assets/video/bubblemenu.webm',
    description: 'Floating circular expanding menu with staggered item reveal.',
    category: 'Components',
    name: 'BubbleMenu',
    docsUrl: 'https://oi-orbuz.vercel.app/components/bubble-menu',
    tags: []
  },
  'Components/CardNav': {
    videoUrl: '/assets/video/cardnav.webm',
    description: 'Expandable navigation bar with card panels revealing nested links.',
    category: 'Components',
    name: 'CardNav',
    docsUrl: 'https://oi-orbuz.vercel.app/components/card-nav',
    tags: []
  },
  'Components/CardSwap': {
    videoUrl: '/assets/video/cardswap.webm',
    description: 'Cards animate position swapping with smooth layout transitions.',
    category: 'Components',
    name: 'CardSwap',
    docsUrl: 'https://oi-orbuz.vercel.app/components/card-swap',
    tags: []
  },
  'Components/Carousel': {
    videoUrl: '/assets/video/carousel.webm',
    description: 'Responsive carousel with touch gestures, looping and transitions.',
    category: 'Components',
    name: 'Carousel',
    docsUrl: 'https://oi-orbuz.vercel.app/components/carousel',
    tags: []
  },
  'Components/ChromaGrid': {
    videoUrl: '/assets/video/chromagrid.webm',
    description: 'A responsive grid of grayscale tiles. Hovering the grid reaveals their colors.',
    category: 'Components',
    name: 'ChromaGrid',
    docsUrl: 'https://oi-orbuz.vercel.app/components/chroma-grid',
    tags: []
  },
  'Components/CircularGallery': {
    videoUrl: '/assets/video/circulargallery.webm',
    description: 'Circular orbit gallery rotating images.',
    category: 'Components',
    name: 'CircularGallery',
    docsUrl: 'https://oi-orbuz.vercel.app/components/circular-gallery',
    tags: []
  },
  'Components/Counter': {
    videoUrl: '/assets/video/counter.webm',
    description: 'Flexible animated counter supporting increments + easing.',
    category: 'Components',
    name: 'Counter',
    docsUrl: 'https://oi-orbuz.vercel.app/components/counter',
    tags: []
  },
  'Components/DecayCard': {
    videoUrl: '/assets/video/decaycard.webm',
    description: 'Hover parallax effect that disintegrates the content of a card.',
    category: 'Components',
    name: 'DecayCard',
    docsUrl: 'https://oi-orbuz.vercel.app/components/decay-card',
    tags: []
  },
  'Components/Dock': {
    videoUrl: '/assets/video/dock.webm',
    description: 'macOS style magnifying dock with proximity scaling of icons.',
    category: 'Components',
    name: 'Dock',
    docsUrl: 'https://oi-orbuz.vercel.app/components/dock',
    tags: []
  },
  'Components/DomeGallery': {
    videoUrl: '/assets/video/domegallery.webm',
    description: 'Immersive 3D dome gallery projecting images on a hemispheric surface.',
    category: 'Components',
    name: 'DomeGallery',
    docsUrl: 'https://oi-orbuz.vercel.app/components/dome-gallery',
    tags: []
  },
  'Components/ElasticSlider': {
    videoUrl: '/assets/video/elasticslider.webm',
    description: 'Slider handle stretches elastically then snaps with spring physics.',
    category: 'Components',
    name: 'ElasticSlider',
    docsUrl: 'https://oi-orbuz.vercel.app/components/elastic-slider',
    tags: []
  },
  'Components/FlowingMenu': {
    videoUrl: '/assets/video/flowingmenu.webm',
    description: 'Liquid flowing active indicator glides between menu items.',
    category: 'Components',
    name: 'FlowingMenu',
    docsUrl: 'https://oi-orbuz.vercel.app/components/flowing-menu',
    tags: []
  },
  'Components/FluidGlass': {
    videoUrl: '/assets/video/fluidglass.webm',
    description: 'Glassmorphism container with animated liquid distortion refraction.',
    category: 'Components',
    name: 'FluidGlass',
    docsUrl: 'https://oi-orbuz.vercel.app/components/fluid-glass',
    tags: []
  },
  'Components/FlyingPosters': {
    videoUrl: '/assets/video/flyingposters.webm',
    description: '3D posters rotate on scroll infinitely.',
    category: 'Components',
    name: 'FlyingPosters',
    docsUrl: 'https://oi-orbuz.vercel.app/components/flying-posters',
    tags: []
  },
  'Components/Folder': {
    videoUrl: '/assets/video/folder.webm',
    description: 'Interactive folder opens to reveal nested content smooth motion.',
    category: 'Components',
    name: 'Folder',
    docsUrl: 'https://oi-orbuz.vercel.app/components/folder',
    tags: []
  },
  'Components/GlassIcons': {
    videoUrl: '/assets/video/glassicons.webm',
    description: 'Icon set styled with frosted glass blur.',
    category: 'Components',
    name: 'GlassIcons',
    docsUrl: 'https://oi-orbuz.vercel.app/components/glass-icons',
    tags: []
  },
  'Components/GlassSurface': {
    videoUrl: '/assets/video/glasssurface.webm',
    description: 'Advanced Apple-style glass surface with real-time distortion + lighting.',
    category: 'Components',
    name: 'GlassSurface',
    docsUrl: 'https://oi-orbuz.vercel.app/components/glass-surface',
    tags: []
  },
  'Components/GooeyNav': {
    videoUrl: '/assets/video/gooeynav.webm',
    description: 'Navigation indicator morphs with gooey blob transitions between items.',
    category: 'Components',
    name: 'GooeyNav',
    docsUrl: 'https://oi-orbuz.vercel.app/components/gooey-nav',
    tags: []
  },
  'Components/InfiniteMenu': {
    videoUrl: '/assets/video/infinitemenu.webm',
    description: 'Horizontally looping menu effect that scrolls endlessly with seamless wrap.',
    category: 'Components',
    name: 'InfiniteMenu',
    docsUrl: 'https://oi-orbuz.vercel.app/components/infinite-menu',
    tags: []
  },
  'Components/Lanyard': {
    videoUrl: '/assets/video/lanyard.webm',
    description: 'Swinging 3D lanyard / badge card with realistic inertial motion.',
    category: 'Components',
    name: 'Lanyard',
    docsUrl: 'https://oi-orbuz.vercel.app/components/lanyard',
    tags: []
  },
  'Components/MagicBento': {
    videoUrl: '/assets/video/magicbento.webm',
    description: 'Interactive bento grid tiles expand + animate with various options.',
    category: 'Components',
    name: 'MagicBento',
    docsUrl: 'https://oi-orbuz.vercel.app/components/magic-bento',
    tags: []
  },
  'Components/Masonry': {
    videoUrl: '/assets/video/masonry.webm',
    description: 'Responsive masonry layout with animated reflow + gaps optimization.',
    category: 'Components',
    name: 'Masonry',
    docsUrl: 'https://oi-orbuz.vercel.app/components/masonry',
    tags: []
  },
  'Components/ModelViewer': {
    videoUrl: '/assets/video/modelviewer.webm',
    description: 'Three.js model viewer with orbit controls and lighting presets.',
    category: 'Components',
    name: 'ModelViewer',
    docsUrl: 'https://oi-orbuz.vercel.app/components/model-viewer',
    tags: []
  },
  'Components/PillNav': {
    videoUrl: '/assets/video/pillnav.webm',
    description: 'Minimal pill nav with sliding active highlight + smooth easing.',
    category: 'Components',
    name: 'PillNav',
    docsUrl: 'https://oi-orbuz.vercel.app/components/pill-nav',
    tags: []
  },
  'Components/PixelCard': {
    videoUrl: '/assets/video/pixelcard.webm',
    description: 'Card content revealed through pixel expansion transition.',
    category: 'Components',
    name: 'PixelCard',
    docsUrl: 'https://oi-orbuz.vercel.app/components/pixel-card',
    tags: []
  },
  'Components/ProfileCard': {
    videoUrl: '/assets/video/profilecard.webm',
    description: 'Animated profile card glare with 3D hover effect.',
    category: 'Components',
    name: 'ProfileCard',
    docsUrl: 'https://oi-orbuz.vercel.app/components/profile-card',
    tags: []
  },
  'Components/ScrollStack': {
    videoUrl: '/assets/video/scrollstack.webm',
    description: 'Overlapping card stack reveals on scroll with depth layering.',
    category: 'Components',
    name: 'ScrollStack',
    docsUrl: 'https://oi-orbuz.vercel.app/components/scroll-stack',
    tags: []
  },
  'Components/SpotlightCard': {
    videoUrl: '/assets/video/spotlightcard.webm',
    description: 'Dynamic spotlight follows cursor casting gradient illumination.',
    category: 'Components',
    name: 'SpotlightCard',
    docsUrl: 'https://oi-orbuz.vercel.app/components/spotlight-card',
    tags: []
  },
  'Components/BorderGlow': {
    videoUrl: '/assets/video/borderglow.webm',
    description: 'Glowing mesh-gradient border that follows cursor direction and intensifies near edges.',
    category: 'Components',
    name: 'BorderGlow',
    docsUrl: 'https://oi-orbuz.vercel.app/components/border-glow',
    tags: []
  },
  'Components/Stack': {
    videoUrl: '/assets/video/stack.webm',
    description: 'Layered stack with swipe animations, autoplay and smooth transitions.',
    category: 'Components',
    name: 'Stack',
    docsUrl: 'https://oi-orbuz.vercel.app/components/stack',
    tags: []
  },
  'Components/Stepper': {
    videoUrl: '/assets/video/stepper.webm',
    description: 'Animated multi-step progress indicator with active state transitions.',
    category: 'Components',
    name: 'Stepper',
    docsUrl: 'https://oi-orbuz.vercel.app/components/stepper',
    tags: []
  },
  'Components/TiltedCard': {
    videoUrl: '/assets/video/tiltedcard.webm',
    description: '3D perspective tilt card reacting to pointer.',
    category: 'Components',
    name: 'TiltedCard',
    docsUrl: 'https://oi-orbuz.vercel.app/components/tilted-card',
    tags: []
  },
  'Components/StaggeredMenu': {
    videoUrl: '/assets/video/staggeredmenu.webm',
    description: 'Menu with staggered item animations and smooth transitions on open/close.',
    category: 'Components',
    name: 'StaggeredMenu',
    docsUrl: 'https://oi-orbuz.vercel.app/components/staggered-menu',
    tags: []
  },
  'Components/ReflectiveCard': {
    videoUrl: '/assets/video/reflectivecard.webm',
    description: 'Card with dynamic webcam reflection and glare effects that respond to cursor movement.',
    category: 'Components',
    name: 'ReflectiveCard',
    docsUrl: 'https://oi-orbuz.vercel.app/components/reflective-card',
    tags: []
  },

  //! Backgrounds -------------------------------------------------------------------------------------------------------------------------------
  'Backgrounds/Aurora': {
    videoUrl: '/assets/video/aurora.webm',
    description: 'Flowing aurora gradient background.',
    category: 'Backgrounds',
    name: 'Aurora',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/aurora',
    tags: []
  },
  'Backgrounds/Balatro': {
    videoUrl: '/assets/video/balatro.webm',
    description: 'The balatro shader, fully customizalbe and interactive.',
    category: 'Backgrounds',
    name: 'Balatro',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/balatro',
    tags: []
  },
  'Backgrounds/Ballpit': {
    videoUrl: '/assets/video/ballpit.webm',
    description: 'Physics ball pit simulation with bouncing colorful spheres.',
    category: 'Backgrounds',
    name: 'Ballpit',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/ballpit',
    tags: []
  },
  'Backgrounds/Beams': {
    videoUrl: '/assets/video/beams.webm',
    description: 'Crossing animated ribbons with customizable properties.',
    category: 'Backgrounds',
    name: 'Beams',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/beams',
    tags: []
  },
  'Backgrounds/ColorBends': {
    videoUrl: '/assets/video/colorbends.webm',
    description: 'Vibrant color bends with smooth flowing animation.',
    category: 'Backgrounds',
    name: 'ColorBends',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/color-bends',
    tags: []
  },
  'Backgrounds/DarkVeil': {
    videoUrl: '/assets/video/darkveil.webm',
    description: 'Subtle dark background with a smooth animation and postprocessing.',
    category: 'Backgrounds',
    name: 'DarkVeil',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/dark-veil',
    tags: []
  },
  'Backgrounds/Dither': {
    videoUrl: '/assets/video/dither.webm',
    description: 'Retro dithered noise shader background.',
    category: 'Backgrounds',
    name: 'Dither',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/dither',
    tags: []
  },
  'Backgrounds/DotField': {
    videoUrl: '',
    description: 'Interactive dot grid with cursor bulge, glow, sparkle, and wave effects.',
    category: 'Backgrounds',
    name: 'DotField',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/dot-field',
    tags: []
  },
  'Backgrounds/DotGrid': {
    videoUrl: '/assets/video/dotgrid.webm',
    description: 'Animated dot grid with cursor interactions.',
    category: 'Backgrounds',
    name: 'DotGrid',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/dot-grid',
    tags: []
  },
  'Backgrounds/FaultyTerminal': {
    videoUrl: '/assets/video/faultyterminal.webm',
    description: 'Terminal CRT scanline squares effect with flicker + noise.',
    category: 'Backgrounds',
    name: 'FaultyTerminal',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/faulty-terminal',
    tags: []
  },
  'Backgrounds/Galaxy': {
    videoUrl: '/assets/video/galaxy.webm',
    description: 'Parallax realistic starfield with pointer interactions.',
    category: 'Backgrounds',
    name: 'Galaxy',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/galaxy',
    tags: []
  },
  'Backgrounds/GradientBlinds': {
    videoUrl: '/assets/video/gradientblinds.webm',
    description: 'Layered gradient blinds with spotlight and noise distortion.',
    category: 'Backgrounds',
    name: 'GradientBlinds',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/gradient-blinds',
    tags: []
  },
  'Backgrounds/Grainient': {
    videoUrl: '/assets/video/grainient.webm',
    description: 'Grainy gradient swirls with soft wave distortion.',
    category: 'Backgrounds',
    name: 'Grainient',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/grainient',
    tags: []
  },
  'Backgrounds/GridScan': {
    videoUrl: '/assets/video/gridscan.webm',
    description: 'Animated grid room 3D scan effect and cool interactions.',
    category: 'Backgrounds',
    name: 'GridScan',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/grid-scan',
    tags: []
  },
  'Backgrounds/GridDistortion': {
    videoUrl: '/assets/video/griddistortion.webm',
    description: 'Warped grid mesh distorts smoothly reacting to cursor.',
    category: 'Backgrounds',
    name: 'GridDistortion',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/grid-distortion',
    tags: []
  },
  'Backgrounds/GridMotion': {
    videoUrl: '/assets/video/gridmotion.webm',
    description: 'Perspective moving grid lines based on cusror position.',
    category: 'Backgrounds',
    name: 'GridMotion',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/grid-motion',
    tags: []
  },
  'Backgrounds/Hyperspeed': {
    videoUrl: '/assets/video/hyperspeed.webm',
    description: 'Animated lines continuously moving to simulate hyperspace travel on click hold.',
    category: 'Backgrounds',
    name: 'Hyperspeed',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/hyperspeed',
    tags: []
  },
  'Backgrounds/Iridescence': {
    videoUrl: '/assets/video/iridescence.webm',
    description: 'Slick iridescent shader with shifting waves.',
    category: 'Backgrounds',
    name: 'Iridescence',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/iridescence',
    tags: []
  },
  'Backgrounds/LetterGlitch': {
    videoUrl: '/assets/video/letterglitch.webm',
    description: 'Matrix style letter animation.',
    category: 'Backgrounds',
    name: 'LetterGlitch',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/letter-glitch',
    tags: []
  },
  'Backgrounds/LightRays': {
    videoUrl: '/assets/video/lightrays.webm',
    description: 'Volumetric light rays/beams with customizable direction.',
    category: 'Backgrounds',
    name: 'LightRays',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/light-rays',
    tags: []
  },
  'Backgrounds/Lightning': {
    videoUrl: '/assets/video/lightning.webm',
    description: 'Procedural lightning bolts with branching and glow flicker.',
    category: 'Backgrounds',
    name: 'Lightning',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/lightning',
    tags: []
  },
  'Backgrounds/LineWaves': {
    videoUrl: '/assets/video/linewaves.webm',
    description: 'Animated line wave pattern with colorful warped distortion.',
    category: 'Backgrounds',
    name: 'LineWaves',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/line-waves',
    tags: []
  },
  'Backgrounds/EvilEye': {
    videoUrl: '/assets/video/evileye.webm',
    description: 'Procedural evil eye shader with animated iris, slit pupil, and fiery outer glow.',
    category: 'Backgrounds',
    name: 'EvilEye',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/evil-eye',
    tags: []
  },
  'Backgrounds/Radar': {
    videoUrl: '/assets/video/radar.webm',
    description: 'Radar sweep effect with concentric rings, radial spokes, and a rotating beam.',
    category: 'Backgrounds',
    name: 'Radar',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/radar',
    tags: []
  },
  'Backgrounds/SoftAurora': {
    videoUrl: '/assets/video/softaurora.webm',
    description: 'Soft aurora borealis shader with 3D Perlin noise and cosine gradient palettes.',
    category: 'Backgrounds',
    name: 'SoftAurora',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/soft-aurora',
    tags: []
  },
  'Backgrounds/LiquidChrome': {
    videoUrl: '/assets/video/liquidchrome.webm',
    description: 'Liquid metallic chrome shader with flowing reflective surface.',
    category: 'Backgrounds',
    name: 'LiquidChrome',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/liquid-chrome',
    tags: []
  },
  'Backgrounds/Orb': {
    videoUrl: '/assets/video/orb.webm',
    description: 'Floating energy orb with customizable hover effect.',
    category: 'Backgrounds',
    name: 'Orb',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/orb',
    tags: []
  },
  'Backgrounds/Particles': {
    videoUrl: '/assets/video/particles.webm',
    description: 'Configurable particle system.',
    category: 'Backgrounds',
    name: 'Particles',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/particles',
    tags: []
  },
  'Backgrounds/PixelBlast': {
    videoUrl: '/assets/video/pixelblast.webm',
    description: 'Exploding pixel particle bursts with optional liquid postprocessing.',
    category: 'Backgrounds',
    name: 'PixelBlast',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/pixel-blast',
    tags: []
  },
  'Backgrounds/Plasma': {
    videoUrl: '/assets/video/plasma.webm',
    description: 'Organic plasma gradients swirl + morph with smooth turbulence.',
    category: 'Backgrounds',
    name: 'Plasma',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/plasma',
    tags: []
  },
  'Backgrounds/PlasmaWave': {
    videoUrl: '',
    description: 'Raymarched plasma waves with dual-wave interference and OGL.',
    category: 'Backgrounds',
    name: 'PlasmaWave',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/plasma-wave',
    tags: []
  },
  'Backgrounds/Prism': {
    videoUrl: '/assets/video/prism.webm',
    description: 'Rotating prism with configurable intensity, size, and colors.',
    category: 'Backgrounds',
    name: 'Prism',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/prism',
    tags: []
  },
  'Backgrounds/PrismaticBurst': {
    videoUrl: '/assets/video/prismaticburst.webm',
    description: 'Burst of light rays with controllable color, distortion, amount.',
    category: 'Backgrounds',
    name: 'PrismaticBurst',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/prismatic-burst',
    tags: []
  },
  'Backgrounds/RippleGrid': {
    videoUrl: '/assets/video/ripplegrid.webm',
    description: 'A grid that continuously animates with a ripple effect.',
    category: 'Backgrounds',
    name: 'RippleGrid',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/ripple-grid',
    tags: []
  },
  'Backgrounds/Silk': {
    videoUrl: '/assets/video/silk.webm',
    description: 'Smooth waves background with soft lighting.',
    category: 'Backgrounds',
    name: 'Silk',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/silk',
    tags: []
  },
  'Backgrounds/ShapeGrid': {
    videoUrl: '/assets/video/squares.webm',
    description: 'Animated grid with shape variants (square, hexagon, circle, triangle) + direction customization.',
    category: 'Backgrounds',
    name: 'ShapeGrid',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/shape-grid',
    tags: []
  },
  'Backgrounds/Threads': {
    videoUrl: '/assets/video/threads.webm',
    description: 'Animated pattern of lines forming a fabric-like motion.',
    category: 'Backgrounds',
    name: 'Threads',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/threads',
    tags: []
  },
  'Backgrounds/Waves': {
    videoUrl: '/assets/video/waves.webm',
    description: 'Layered lines that form smooth wave patterns with animation.',
    category: 'Backgrounds',
    name: 'Waves',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/waves',
    tags: []
  },
  'Backgrounds/LiquidEther': {
    videoUrl: '/assets/video/liquidether.webm',
    description:
      'Interactive liquid shader with flowing distortion and customizable colors.',
    category: 'Backgrounds',
    name: 'LiquidEther',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/liquid-ether',
    tags: []
  },
  'Backgrounds/FloatingLines': {
    videoUrl: '/assets/video/floatinglines.webm',
    description: '3D floating lines that react to cursor movement.',
    category: 'Backgrounds',
    name: 'FloatingLines',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/floating-lines',
    tags: []
  },
  'Backgrounds/LightPillar': {
    videoUrl: '/assets/video/lightpillar.webm',
    description: 'Vertical pillar of light with glow effects.',
    category: 'Backgrounds',
    name: 'LightPillar',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/light-pillar',
    tags: []
  },
  'Backgrounds/PixelSnow': {
    videoUrl: '/assets/video/pixelsnow.webm',
    description: 'Falling pixelated snow effect with customizable density and speed.',
    category: 'Backgrounds',
    name: 'PixelSnow',
    docsUrl: 'https://oi-orbuz.vercel.app/backgrounds/pixel-snow',
    tags: []
  }
};

export default componentMetadata;

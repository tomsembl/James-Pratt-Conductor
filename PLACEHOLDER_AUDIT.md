# Placeholder Content Documentation

## Overview
This document catalogs all identified placeholder content in the James Pratt conductor website that should be replaced with actual media, content, or functionality when resources become available.

## Media Page Placeholders

### Video Content Placeholders
**Location**: `/src/pages/Media.jsx` lines 214-230
**Type**: Video placeholder sections
**Description**: Styled placeholder divs that simulate video content but contain no actual video files

**Current Content**:
- Verdi Requiem performance placeholder (90 minutes, 2023)
- Contains Play icon and descriptive text but no actual video

**Recommended Replacement**:
- Actual video recordings of James Pratt conducting performances
- Professional recordings from Perth Symphonic Chorus concerts
- Messiah 2023 performance footage
- Adelaide Symphony Orchestra debut recording

### Photo Gallery Placeholders
**Location**: `/src/pages/Media.jsx` lines 239-255
**Type**: Photo placeholder sections
**Description**: Placeholder sections for professional concert photography

**Current Content**:
- Performance Gallery placeholder with Camera icon
- Descriptive text about professional photography but no actual images

**Recommended Replacement**:
- High-resolution concert photography from performances
- Behind-the-scenes photos from rehearsals
- Professional headshots for press use
- Photos from Perth Symphonic Chorus events

### Press Coverage Placeholder
**Location**: `/src/pages/Media.jsx` lines 357-375
**Type**: Press and media coverage placeholder
**Description**: Placeholder for press reviews and media coverage

**Current Content**:
- Press coverage placeholder with FileText icon
- Generic text about media coverage

**Recommended Replacement**:
- Actual press reviews from performances
- Interview articles and features
- Program notes and announcements
- Professional bio releases

## Audio Content Placeholders

### Press Kit Audio Samples
**Location**: `/src/pages/Media.jsx` line 157
**Type**: Text reference to audio samples
**Description**: Press kit mentions "Audio samples and video excerpts" but no actual audio is provided

**Recommended Replacement**:
- High-quality audio recordings of conducted performances
- Excerpts from major works (Messiah, Verdi Requiem)
- Educational content or conducting demonstrations
- Interview or speaking engagement recordings

## Contact Form Placeholders

### Organization Field
**Location**: `/src/pages/Contact.jsx` line 199
**Type**: Form placeholder text
**Description**: Input field placeholder text for organization type

**Current Content**: "Orchestra, Opera Company, School, etc."
**Status**: Acceptable - provides helpful guidance to users

### Message Field
**Location**: `/src/pages/Contact.jsx` line 238
**Type**: Form placeholder text
**Description**: Textarea placeholder for detailed messages

**Current Content**: "Please provide details about your project, dates, repertoire, and any specific requirements..."
**Status**: Acceptable - provides helpful guidance to users

## Technical Implementation Notes

### CSS Placeholder Styling
**Location**: `/src/pages/Media.jsx` lines 409-445
**Description**: CSS classes specifically designed for placeholder content
- `.media-placeholder`: Base placeholder styling
- `.video-placeholder`: Video-specific placeholder styling
- `.photo-placeholder`: Photo gallery placeholder styling
- `.press-placeholder`: Press coverage placeholder styling

**These should be retained** as they provide proper styling for when actual media content is added.

## Priority for Replacement

### High Priority
1. **Video Content**: Most visually prominent placeholders, essential for professional credibility
2. **Photo Gallery**: Important for showcasing professional image and performance quality
3. **Audio Samples**: Critical for musical professionals to demonstrate artistic quality

### Medium Priority
1. **Press Coverage**: Valuable for credibility but not immediately essential
2. **Additional Media**: Supporting materials that enhance but don't define the site

### Low Priority
1. **Contact Form Placeholders**: Currently serve helpful UX purpose and don't need immediate replacement

## Technical Requirements for Media Addition

### Video Requirements
- Format: MP4 (H.264 encoding recommended)
- Resolution: 1080p minimum for featured content
- Duration: 2-5 minute excerpts preferred for web viewing
- File size: Optimize for web delivery (consider hosting on YouTube/Vimeo)

### Photo Requirements
- Format: JPEG or WebP
- Resolution: 1920x1080 minimum for featured images
- Optimization: Compressed for web delivery
- Alt text: Required for accessibility

### Audio Requirements
- Format: MP3 or AAC
- Quality: 192kbps minimum
- Duration: 30-60 second excerpts for press kit
- File size: Optimize for streaming

## Implementation Notes

All placeholder sections are properly structured and styled. When replacing with actual content:

1. Maintain existing CSS classes for consistent styling
2. Update alt text and accessibility attributes appropriately
3. Ensure responsive design is maintained across all device sizes
4. Add proper loading states for media content
5. Consider implementing lazy loading for performance optimization

## Contact Information Status

**Email addresses are properly configured**:
- `info@jamespratt.com` used consistently across site
- No placeholder email addresses found
- Contact information appears authentic and professional

---

*Last Updated*: December 2024  
*Content Audit*: Complete  
*Status*: Ready for media content replacement when available

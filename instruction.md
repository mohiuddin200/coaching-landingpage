# Coaching Management Software - Marketing Landing Page

## Complete Build Specification & AI Prompt Document

> **Purpose**: This document contains everything needed to build a marketing landing page for the "Coaching Management" SaaS platform from scratch in a brand-new Next.js project. Hand this entire document to an AI assistant to begin building.

---

## 1. PROJECT SETUP

### Tech Stack
- **Framework**: Next.js 16 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animation Libraries**:
  - **GSAP** (GreenSock) - scroll-triggered animations, timeline sequences, text reveals, parallax effects
  - **Three.js** (via `@react-three/fiber` + `@react-three/drei`) - 3D hero background, floating geometric elements, interactive particles
- **Additional Libraries**:
  - `framer-motion` - page transitions, layout animations, scroll progress
  - `lenis` or `@studio-freight/lenis` - smooth scrolling
  - `lucide-react` - icons
  - `next-themes` - dark/light mode (white mode default)
- **Font**: Inter or Geist Sans (modern, clean)
- **No shadcn/ui defaults** - Build a custom design system with unique color palette, custom button styles, card designs, and typography that does NOT look like generic shadcn

### Project Init
```bash
npx create-next-app@latest coaching-landing --typescript --tailwind --app --src-dir
npm install gsap @gsap/react three @react-three/fiber @react-three/drei framer-motion lenis lucide-react next-themes
```

---

## 2. WHAT THIS SOFTWARE IS

### Product Name
**MentorBase**

### One-Liner
An all-in-one cloud platform that lets coaching institutes manage students, teachers, attendance, exams, finances, SMS notifications, and ID cards - with zero technical skills required.

### Target Audience
- Coaching center owners in Bangladesh and South Asia
- Small-to-medium educational institutes (10-500 students)
- Institute administrators who currently use pen-and-paper or spreadsheets
- Non-technical users who want a self-service management tool

### Core Value Proposition
- **Self-service**: Create, edit, delete, and manage everything yourself - no developer needed
- **All-in-one**: Replace 5-6 separate tools (spreadsheets, SMS apps, payment trackers, attendance registers) with one platform
- **Multi-tenant**: Each institute gets its own isolated space with custom branding
- **Role-based access**: Assign admins, finance managers, and academic coordinators with appropriate permissions
- **Automated workflows**: Biometric attendance sync, SMS notifications, auto-generated student IDs

---

## 3. COMPLETE FEATURE LIST (for landing page content)

### 3.1 Dashboard & Analytics
- Real-time overview: total students, teachers, active classes, attendance rate, monthly revenue
- Birthday notifications for students
- Attendance trends chart (7-day history)
- Revenue vs Expenses monthly comparison chart
- Class distribution pie chart
- Teacher performance bar chart
- Upcoming classes and recent enrollments widgets
- Recent activity feed (enrollments, payments, attendance)

### 3.2 Student Management
- Complete student profiles with 40+ fields (personal, academic, family, emergency contact, documents)
- Multi-step enrollment form (3 steps: Basic Info, Detailed Profile, Additional Info)
- Assign students to class levels, batches, and groups
- Active/Inactive status management
- Student search and paginated table with filters
- Soft delete with archive & restore functionality
- **Student ID Card Generation**:
  - Auto-generated unique ID numbers per organization
  - Professional ID card PDF generation (CR80 standard format)
  - Single card download (landscape A4 with front + back)
  - Bulk download (portrait A4, 9 cards per page, double-sided printing ready)
  - Card includes: photo, name, ID number, barcode, QR code, level, batch, blood group, guardian info, organization logo
  - Google Drive image support for photos and logos
- Optional manual Student ID / Roll Number entry

### 3.3 Teacher Management
- Comprehensive teacher profiles (personal, professional, qualifications, salary info, social links)
- Subject and class assignment
- NID, photo, university ID card uploads
- Educational background and professional experience tracking
- Active/Inactive status with soft delete & restore
- Teacher invitation system (invite teachers to create their own accounts)

### 3.4 Attendance System
- Daily attendance marking interface with visual color-coded grid
- Level and class section filtering
- Present/Absent toggle with debounced auto-save
- Support for both student and teacher attendance
- **Biometric Device Integration**:
  - Multi-provider support (STELLER and TIPSOI devices)
  - Automatic background sync every 5 minutes
  - Check-in/check-out time tracking
  - Manual vs biometric attendance badge indicators
  - Device status monitoring and error handling
  - Complete audit trail with before/after logging

### 3.5 Class & Level Management
- Create class levels (e.g., Class 6, 7, 8, 9, 10, HSC 1st Year, 2nd Year)
- Add subjects per level with codes and descriptions
- Class sections with teacher assignment, capacity, room number, academic year
- Schedule management (day-of-week, time slots)
- Class status tracking (Scheduled, In Progress, Completed, Cancelled)
- Auto-enrollment: students enrolled in a level are auto-enrolled in all scheduled classes

### 3.6 Batch Management
- Create time-based batches per level (Morning, Afternoon, Evening)
- Start and end time configuration
- Assign students to specific batches
- Batch-level student count tracking

### 3.7 Exam Management
- Create exams with types: Monthly, Weekly, Open Book, Midterm, Final, Quiz, Assignment
- Exam scheduling with date, time, room number, duration
- Total marks and passing marks configuration
- Question paper and answer key URL uploads
- Per-student result grading with marks, grade, and remarks
- Attendance tracking per exam (attended / not attended with reason)
- Exam status lifecycle: Scheduled -> In Progress -> Completed
- Grading progress bars

### 3.8 Finance Module
**Student Payments:**
- Record and track all student payments
- Payment status: Paid, Pending, Overdue, Cancelled
- Month/year period tracking
- Receipt number generation
- Auto-detection of overdue payments

**Fee Structures:**
- Configurable fee templates per level
- Frequency options: Monthly, Quarterly, Yearly, One-time
- Academic year association
- Activate/deactivate fee structures

**Teacher Salaries:**
- Record salary payments with period tracking
- Support for Monthly, Hourly, and Per-Class payment types

**Expenses:**
- Log organizational expenses by category
- Categories: Salary, Rent, Utilities, SMS, Marketing, Supplies, Maintenance, Equipment, Other
- Vendor and receipt tracking

**Financial Dashboard:**
- Monthly revenue (total paid payments)
- Monthly expenses breakdown
- Outstanding dues (pending + overdue)
- Net profit calculation
- Expenses by category pie chart
- Payment status distribution chart

### 3.9 SMS & Notifications
- **MRAM SMS Gateway** integration with API key management
- **Attendance SMS**: Automatic notifications when attendance is marked (configurable for Present, Absent, or Both)
- **Exam Reminder SMS**: Configurable 1-7 days before exam with Bengali localization
- **Exam Result SMS**: Automatic notification when results are published
- SMS scheduling with background dispatch
- Failed message retry with exponential backoff
- SMS cost tracking and balance display
- Complete SMS logs with delivery status
- Per-student SMS enable/disable and phone preference (Father/Mother/Both)
- Bengali language support for all SMS templates

### 3.10 Archive & Recovery
- Soft delete for students, teachers, payments, and exams
- Deletion reasons: Graduated, Transferred, Resigned, Terminated, Error, Duplicate, etc.
- Browse and search archived records
- One-click restoration
- "Who deleted" and "when deleted" audit trail

### 3.11 Role-Based Access Control
- **Super Admin**: Full platform access, manage all organizations and devices
- **Organization Admin**: Full organization control, invite users, manage settings
- **Finance Manager**: Finance-only access (fees, payments, salaries, expenses)
- **Academic Coordinator**: Academic-only access (students, teachers, classes, attendance, exams)
- Granular permission system with page-level access control

### 3.12 Multi-Tenancy
- Each institute gets its own isolated space
- Organization branding (logo, name, contact info, website)
- All data strictly separated between organizations
- Organization-specific SMS configuration
- Custom fee structures per organization

### 3.13 Settings & Configuration
- Personal profile management (name, password)
- Organization profile (name, email, phone, address, logo, website, social handles)
- System toggles: SMS notifications, biometric attendance, email notifications, attendance reminders, payment notifications
- Biometric device management (add, configure, test connectivity, monitor status)

---

## 4. LANDING PAGE STRUCTURE & SECTIONS

### Section 1: Hero
- **3D animated background** using Three.js (floating geometric shapes, particles, subtle gradient mesh)
- Large bold headline: e.g., "Manage Your Coaching Institute Like a Pro"
- Subheadline: "Students. Teachers. Attendance. Exams. Finance. SMS. All in one platform."
- Two CTAs: "Get Started Free" (primary) and "Watch Demo" (secondary/outline)
- **Hero screenshot**: A large, perspective-tilted screenshot of the dashboard (use CSS `transform: perspective(1000px) rotateY(-5deg) rotateX(5deg)`) with a subtle glow/shadow behind it
- Scroll-triggered fade-in animations with GSAP

### Section 2: Trusted By / Social Proof Bar
- Horizontal scrolling logos or text: "Trusted by X+ coaching institutes"
- Animated counter: students managed, attendance records, SMS sent
- Light horizontal divider animation

### Section 3: Feature Showcase (Main Section - largest)
- **Tabbed or scroll-triggered feature cards** - each feature gets a card with:
  - Icon + title + 2-3 line description
  - A screenshot/mockup displayed at an angle in a device frame or browser window mockup
  - Scroll-triggered entrance animation (slide in from left/right alternating)
- Features to showcase (each with a screenshot placeholder):
  1. **Dashboard & Analytics** - "See everything at a glance"
  2. **Student Management** - "Complete student lifecycle management"
  3. **Student ID Cards** - "Professional ID cards in seconds"
  4. **Attendance Tracking** - "Mark attendance in one click, or let biometrics do it"
  5. **Exam Management** - "Create, grade, and notify - all automated"
  6. **Finance Module** - "Track every taka in and out"
  7. **SMS Notifications** - "Keep parents informed automatically"
  8. **Multi-Role Access** - "Right access for the right people"

### Section 4: Screenshot Gallery / App Preview
- **Interactive 3D carousel** or perspective grid of app screenshots
- Screenshots should be displayed in browser/device mockups (use CSS for the frame)
- Scroll-activated parallax movement
- Click to enlarge (lightbox)
- Minimum 6-8 screenshot placeholders:
  - Dashboard overview
  - Student list/table
  - Student ID card (front & back)
  - Attendance marking screen
  - Exam results view
  - Finance dashboard
  - SMS settings
  - Mobile responsive view

### Section 5: Video Demo Section
- Large video player area (16:9 ratio) with custom play button
- Floating device frame around the video
- Title: "See It In Action" with subtitle
- Support for embedded YouTube/Vimeo or self-hosted video
- Placeholder thumbnail with animated play button
- Optionally: 2-3 smaller video thumbnails below for specific feature demos

### Section 6: How It Works
- 3-4 step process with numbered circles and connecting lines/arrows
- Steps:
  1. "Sign Up" - Create your institute account
  2. "Set Up" - Add your classes, levels, and batches
  3. "Enroll" - Add students and teachers
  4. "Manage" - Attendance, exams, payments, SMS - all automated
- Each step gets a small icon/illustration and brief description
- GSAP scroll animation: steps reveal one by one as user scrolls

### Section 7: Key Benefits / Why Choose Us
- Grid of benefit cards (2x3 or 3x2):
  - "Self-Service" - No developer needed, do everything yourself
  - "All-in-One" - Replace spreadsheets, SMS apps, and paper registers
  - "Secure" - Role-based access, data isolation per institute
  - "Automated" - Biometric sync, SMS alerts, auto-generated IDs
  - "Affordable" - Pricing that works for small institutes
  - "Mobile Ready" - Works on any device, responsive design
- Subtle hover animations on cards

### Section 8: Release Timeline / Roadmap
- Vertical timeline component with alternating left/right cards
- Each entry has:
  - Version number (e.g., v1.0, v1.1, v1.2)
  - Release date
  - Title
  - Bullet list of features/changes
  - Status badge: "Released", "Current", "Coming Soon", "Planned"
- Scroll-triggered animation: timeline fills in as user scrolls down
- Sample entries (update with real data):
  - v1.0 - "Foundation" - Student/Teacher CRUD, Attendance, Classes
  - v1.1 - "Finance" - Payment tracking, Fee structures, Expenses
  - v1.2 - "Communication" - SMS integration, Exam notifications
  - v1.3 - "Identity" - Student ID card generation, Bulk download
  - v1.4 - "Automation" - Biometric integration, Auto-enrollment
  - v2.0 (Coming Soon) - "Next Gen" - Mobile app, Parent portal, Online payments

### Section 9: Pricing (Optional / Coming Soon)
- 2-3 tier pricing cards
- Toggle: Monthly / Yearly
- Highlight recommended plan
- Feature comparison list
- CTA on each card
- Or: "Contact Us for Pricing" with a form

### Section 10: FAQ
- Accordion-style expandable questions
- 6-8 common questions:
  - What is Coaching Management?
  - Who is this for?
  - Do I need technical skills?
  - How does biometric attendance work?
  - Can I send SMS to parents?
  - Is my data secure?
  - Can multiple people manage the institute?
  - What devices does it work on?

### Section 11: CTA / Contact
- Final call-to-action section with gradient background
- "Ready to Transform Your Institute?"
- Email signup or contact form
- Social media links
- Or: "Start Your Free Trial" button

### Section 12: Footer
- Logo + tagline
- Quick links: Features, Pricing, Roadmap, Contact, Privacy Policy, Terms
- Social media icons
- "Made with heart in Bangladesh" or similar
- Copyright notice

---

## 5. DESIGN SPECIFICATIONS

### Color Palette (NOT generic shadcn - custom and professional)

**Light Mode (Default):**
- Primary: `#2563EB` (Royal Blue) or `#6366F1` (Indigo) - for CTAs, links, accents
- Primary Dark: `#1D4ED8` - hover states
- Secondary: `#0EA5E9` (Sky Blue) - secondary accents
- Background: `#FAFBFC` - slightly off-white, not pure white
- Surface: `#FFFFFF` - cards, modals
- Text Primary: `#0F172A` (Slate 900) - headings
- Text Secondary: `#475569` (Slate 600) - body text
- Text Muted: `#94A3B8` (Slate 400) - captions
- Border: `#E2E8F0` (Slate 200)
- Success: `#10B981` (Emerald)
- Warning: `#F59E0B` (Amber)
- Gradient Hero: `linear-gradient(135deg, #667EEA 0%, #764BA2 100%)` or similar

**Dark Mode:**
- Background: `#0B1120` (Deep navy, NOT pure black)
- Surface: `#1E293B` (Slate 800)
- Text Primary: `#F1F5F9` (Slate 100)
- Text Secondary: `#CBD5E1` (Slate 300)
- Border: `#334155` (Slate 700)
- Primary stays the same or slightly brighter
- Cards get subtle `border` + `backdrop-blur` for glass effect

### Typography
- Headings: Bold/Black weight, large sizes (hero: 64-80px desktop, 36-48px mobile)
- Body: Regular weight, 16-18px
- Captions: 14px, muted color
- Line height: 1.5 for body, 1.1-1.2 for headings
- Letter spacing: -0.02em for large headings (tight)

### Screenshot Display Styles
- **Browser mockup frame**: Rounded corners, fake address bar with dots, subtle shadow
- **Perspective tilt**: `transform: perspective(1200px) rotateY(-8deg) rotateX(3deg)`
- **Floating effect**: Subtle shadow + slight vertical animation (GSAP float)
- **Glow behind**: Gradient blur behind screenshot (e.g., blue/purple glow)
- **Device frames**: Optional phone frame for mobile screenshots
- Never display raw flat images - always in a styled container

### Animation Guidelines
- **Scroll-triggered**: Use GSAP ScrollTrigger for all section animations
- **Entrance animations**: Fade up + slight translate (stagger children by 0.1s)
- **Parallax**: Background elements move slower than foreground
- **Text reveals**: Split text into lines/words, animate each with stagger
- **Counter animations**: Numbers count up when section enters viewport
- **Hover effects**: Scale 1.02-1.05, shadow increase, subtle color shift
- **Page load**: Hero section animates in with sequenced timeline
- **Smooth scroll**: Use Lenis for buttery smooth scrolling
- **Three.js hero**: Floating polyhedrons/spheres with slow rotation, react to mouse movement
- **Performance**: Use `will-change`, `transform` only, avoid layout triggers. Respect `prefers-reduced-motion`

### Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts, smaller text)
- Tablet: 768-1024px (2-column grids, adjusted spacing)
- Desktop: > 1024px (full layout, 3-4 column grids)
- Large: > 1280px (max-width container, centered)

---

## 6. PAGE STRUCTURE (File Layout)

```
src/
  app/
    layout.tsx          # Root layout with ThemeProvider, fonts, metadata
    page.tsx            # Landing page (all sections composed here)
    globals.css         # Tailwind config, custom CSS variables, animations
  components/
    layout/
      navbar.tsx        # Fixed top navigation with scroll-aware transparency
      footer.tsx        # Site footer
    sections/
      hero.tsx          # Hero with Three.js background
      social-proof.tsx  # Trusted by / counters
      features.tsx      # Feature showcase with screenshots
      app-preview.tsx   # Screenshot gallery
      video-demo.tsx    # Video section
      how-it-works.tsx  # Step-by-step process
      benefits.tsx      # Why choose us grid
      roadmap.tsx       # Release timeline
      pricing.tsx       # Pricing tiers (optional)
      faq.tsx           # FAQ accordion
      cta.tsx           # Final call-to-action
    three/
      hero-scene.tsx    # Three.js 3D scene component
      floating-shapes.tsx
    ui/
      button.tsx        # Custom button (NOT shadcn default)
      card.tsx          # Custom card component
      badge.tsx         # Status badges
      accordion.tsx     # FAQ accordion
      device-frame.tsx  # Browser/phone mockup frame for screenshots
      video-player.tsx  # Custom video player with thumbnail
      counter.tsx       # Animated number counter
      timeline.tsx      # Vertical timeline component
    animations/
      scroll-reveal.tsx # GSAP ScrollTrigger wrapper component
      text-reveal.tsx   # Animated text split/reveal
      parallax.tsx      # Parallax wrapper
  lib/
    utils.ts            # cn() helper, etc.
  hooks/
    use-scroll-progress.ts
    use-intersection.ts
  public/
    screenshots/        # App screenshot placeholders (use real screenshots later)
      dashboard.png
      student-list.png
      id-card.png
      attendance.png
      exam-results.png
      finance.png
      sms-settings.png
      mobile-view.png
    videos/             # Video placeholders
      demo-thumbnail.png
    images/
      logo.svg
      og-image.png      # Open Graph image for social sharing
```

---

## 7. DARK/LIGHT MODE IMPLEMENTATION

- Use `next-themes` with `attribute="class"` and `defaultTheme="light"`
- Theme toggle button in navbar (sun/moon icon with smooth transition)
- All colors via CSS custom properties in `globals.css`
- Dark mode: deep navy backgrounds, glass-morphism cards with `backdrop-blur`, brighter accent colors
- Three.js scene adapts: lighter particles in dark mode, darker in light mode
- Smooth transition between modes (0.3s on background-color, color)

---

## 8. SEO & METADATA

```typescript
export const metadata: Metadata = {
  title: "Coaching Management - All-in-One Institute Management Platform",
  description: "Manage students, teachers, attendance, exams, finances, and SMS notifications for your coaching institute. Self-service, multi-tenant, and mobile-ready.",
  keywords: ["coaching management", "institute management", "student management", "attendance tracking", "coaching center software", "Bangladesh"],
  openGraph: {
    title: "Coaching Management - All-in-One Institute Management Platform",
    description: "...",
    images: ["/images/og-image.png"],
  },
}
```

---

## 9. PERFORMANCE REQUIREMENTS

- Lighthouse score: 90+ on all metrics
- Three.js scene: Lazy load, don't block initial render. Use `Suspense` with fallback gradient
- Images: Use `next/image` with WebP format, blur placeholders
- Fonts: Preload primary font, use `font-display: swap`
- Animations: Disable on `prefers-reduced-motion: reduce`
- Code split: Each section can be a dynamic import if needed
- Smooth scroll: 60fps target

---

## 10. PLACEHOLDER CONTENT & COPY

### Hero
- **Headline**: "Your Institute, Fully Managed"
- **Subheadline**: "From enrollment to exam results, from attendance to accounting - manage everything in one powerful platform. No technical skills required."
- **CTA 1**: "Start Free Trial"
- **CTA 2**: "Watch Demo"

### Feature Cards Copy

1. **Smart Dashboard**
   "Get a bird's-eye view of your entire institute. Track students, revenue, attendance trends, and upcoming events - all updated in real-time."

2. **Student Management**
   "Enroll students in 3 simple steps. Track their entire journey - from admission to graduation. Manage profiles, assign batches, and track everything."

3. **Student ID Cards**
   "Generate professional, print-ready ID cards instantly. Download one or bulk-generate hundreds. Complete with barcodes, QR codes, and your institute branding."

4. **Attendance Tracking**
   "Mark attendance with a single click, or let biometric devices do it automatically. Parents get SMS alerts. You get detailed analytics."

5. **Exam Management**
   "Create exams, enter results, auto-calculate grades, and notify parents via SMS. Track every student's performance over time."

6. **Finance & Accounting**
   "Track student fees, teacher salaries, and organizational expenses. Auto-detect overdue payments. See your financial health at a glance."

7. **SMS Notifications**
   "Keep parents in the loop automatically. Attendance alerts, exam reminders, and result notifications - all sent via SMS in Bengali or English."

8. **Role-Based Access**
   "Give your team the access they need - and nothing more. Admins, finance managers, and academic coordinators each see only what's relevant."

### How It Works
1. **Create Your Institute** - "Sign up and set up your organization profile, logo, and preferences in minutes."
2. **Configure Classes** - "Add your class levels, subjects, batches, and schedules. The system adapts to your structure."
3. **Enroll Everyone** - "Add students and teachers with comprehensive profiles. Assign them to classes and batches."
4. **Let It Run** - "Mark attendance, conduct exams, track payments, send SMS - all from one dashboard. It just works."

### FAQ Content
- **Q: What is Coaching Management?**
  A: It's a cloud-based platform designed specifically for coaching institutes and tutorial centers. It replaces paper registers, spreadsheets, and multiple apps with one unified system.

- **Q: Do I need any technical skills?**
  A: Not at all. Everything is designed with a simple interface. If you can use a smartphone, you can manage your institute with this software.

- **Q: How does biometric attendance work?**
  A: Connect your STELLER or TIPSOI biometric device. The system automatically syncs attendance data every 5 minutes. Students punch in, and parents get an SMS.

- **Q: Can I send SMS to parents?**
  A: Yes. The system integrates with MRAM SMS gateway. You can send attendance alerts, exam reminders, and result notifications automatically in Bengali.

- **Q: Is my data secure?**
  A: Absolutely. Each institute's data is completely isolated. We use role-based access control so team members only see what they're authorized to access.

- **Q: Can multiple people manage the institute?**
  A: Yes. You can invite team members as Organization Admins, Finance Managers, or Academic Coordinators - each with appropriate access levels.

- **Q: Does it work on mobile?**
  A: Yes. The entire application is responsive and works on phones, tablets, and desktops.

- **Q: What about existing students?**
  A: You can bulk-add existing students. The system auto-generates ID numbers and can backfill data for students who were added before certain features were introduced.

---

## 11. IMPORTANT IMPLEMENTATION NOTES

- This is a STANDALONE marketing site, NOT inside the main application codebase
- No backend/database needed - it's a static marketing page
- All screenshots/videos are placeholder images until replaced with real ones
- The "Start Free Trial" and "Get Started" buttons should link to the main application's signup page (configure as environment variable: `NEXT_PUBLIC_APP_URL`)
- The site should be deployable to Vercel with zero configuration
- Use `next/image` for all images with proper width/height/alt
- Make the navbar sticky with background blur on scroll
- Add a subtle scroll progress bar at the top of the page
- The Three.js scene should NOT be heavy - use simple geometries (icosahedrons, torus, spheres) with wireframe or low-poly style
- GSAP animations should use `gsap.registerPlugin(ScrollTrigger)` and clean up on unmount
- All sections should have unique IDs for anchor navigation from the navbar

---

## 12. NAVBAR LINKS

- Features (scrolls to features section)
- Screenshots (scrolls to app preview)
- Demo (scrolls to video section)
- Roadmap (scrolls to timeline)
- Pricing (scrolls to pricing or "Contact Us")
- Theme toggle (sun/moon)
- "Get Started" button (links to app)

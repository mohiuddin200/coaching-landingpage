# Coaching Marketing Landing Page

## Known Issues & Fixes

### R3F bufferAttribute requires `args` prop
- In @react-three/fiber v9+, `<bufferAttribute>` requires an `args` prop and won't accept `count/array/itemSize` as separate props
- **Fix**: Use imperative approach with `useEffect` + `geometry.setAttribute()` instead of declarative `<bufferAttribute>`

## Build Notes
- Next.js 16.1.6 with Turbopack
- There's a lockfile warning about workspace root - harmless, caused by parent directory lockfile
- metadataBase warning is expected in local builds (no production URL set yet)

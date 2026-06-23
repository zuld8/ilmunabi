# Project Rules — IlmuNabi

## 1. Safe Client-Side Storage Access
- **Constraint**: NEVER access `localStorage` or `sessionStorage` directly in React components or hooks (e.g., `localStorage.getItem` or `localStorage.setItem`).
- **Rationale**: Browsers in Incognito/Private mode or with restricted settings will throw a `SecurityError` or `DOMException` upon direct storage access, which halts client-side hydration and crashes the React render tree.
- **Pattern**: Always use the defined `safeStorage` wrapper (or implement a try-catch fallback) to gracefully fallback to in-memory state if storage is blocked:
  ```typescript
  const safeStorage = {
    getItem(key: string): string | null {
      try {
        if (typeof window !== "undefined" && window.localStorage) {
          return localStorage.getItem(key);
        }
      } catch (e) {
        console.warn("Storage access failed:", e);
      }
      return null;
    },
    setItem(key: string, value: string): void {
      try {
        if (typeof window !== "undefined" && window.localStorage) {
          localStorage.setItem(key, value);
        }
      } catch (e) {
        console.warn("Storage write failed:", e);
      }
    }
  };
  ```

## 2. Defensive State Properties (Optional Chaining & Safe Fallbacks)
- **Constraint**: Always use optional chaining (`?.`) and fallback default values (e.g., `|| []`, `|| ""`) when reading fields from dynamically loaded profiles (e.g., `activeChild`).
- **Rationale**: Properties such as `completedObjects`, `badges`, `unlockedCards`, `name`, and `zone` can be missing or null in newly-created database profiles, triggering `TypeError` crashes when accessing length or methods like `.includes()`.
- **Pattern**:
  ```typescript
  const isCompleted = (activeChild?.completedObjects || []).includes(slug);
  const initials = (activeChild?.name || "").substring(0, 2);
  const ZoneIcon = { balita: Sparkles, ... }[activeChild?.zone || "balita"] || Sparkles;
  ```

## 3. On-The-Fly Parent Profile Recovery
- **Constraint**: If a logged-in user lacks a matching row in `public.profiles` during authentication synchronization, automatically insert/create a default profile client-side.
- **Rationale**: Relies on robust profile mapping to trigger free trials and prevent rendering locks when Auth signup triggers are absent or fail.

## 4. Redirection Reliability
- **Constraint**: Use `window.location.href` instead of client-side router (`router.push`) when redirecting between onboarding, authentication callbacks, and dashboard landing pages to avoid client-router states getting stuck.

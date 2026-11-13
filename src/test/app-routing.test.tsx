import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the intervention areas page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/zones-intervention");

    expect(matches.at(-1)?.routeId).toBe("/zones-intervention");
  });

  it.each([
    "romorantin",
    "blois",
    "vendome",
    "orleans",
    "beaugency",
    "tours",
    "chartres",
    "chateaudun",
    "dreux",
    "versailles",
  ])("matches the dedicated intervention page for %s", (slug) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(`/zones-intervention/${slug}`);

    expect(matches.at(-1)?.routeId).toBe("/zones-intervention/$slug");
  });

  it.each([
    "romorantin",
    "blois",
    "vendome",
    "orleans",
    "beaugency",
    "tours",
    "chartres",
    "chateaudun",
    "dreux",
    "versailles",
  ])("matches the dedicated simulation page for %s", (slug) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(`/simulation/${slug}`);

    expect(matches.at(-1)?.routeId).toBe("/simulation/$slug");
  });
});

/**
 * Mahmoud Khairy Portfolio - Data Provider
 * Fetches structured project data from projects.json with robust fallback
 * for zero-dependency execution across both http(s):// and file:/// protocols.
 */

class DataProvider {
  constructor() {
    this.projects = [];
    this.isLoaded = false;
  }

  async loadProjects() {
    if (this.isLoaded && this.projects.length > 0) {
      return this.projects;
    }

    try {
      const response = await fetch("assets/data/projects.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.projects = await response.json();
      this.isLoaded = true;
      return this.projects;
    } catch (err) {
      console.warn("Fetch from projects.json failed or running on local file:// origin. Using verified static project bundle.", err);
      if (window.EMBEDDED_PROJECTS && window.EMBEDDED_PROJECTS.length > 0) {
        this.projects = window.EMBEDDED_PROJECTS;
        this.isLoaded = true;
        return this.projects;
      }
      return [];
    }
  }

  async getProjectById(id) {
    const list = await this.loadProjects();
    return list.find((p) => p.id === id) || null;
  }

  async getProjectsByCategory(category) {
    const list = await this.loadProjects();
    if (!category || category === "all") return list;
    return list.filter((p) => p.category === category);
  }

  async getFeaturedProjects() {
    const list = await this.loadProjects();
    return list.filter((p) => p.featured);
  }
}

// Global data provider
window.dataProvider = new DataProvider();

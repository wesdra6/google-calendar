# Contributing to Google Calendar MCP Server

Thank you for your interest in contributing to the Google Calendar MCP Server! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Use welcoming and inclusive language
- Be collaborative
- Accept constructive criticism


## How to Contribute

### Reporting Bugs

1. Check the issue tracker to avoid duplicate reports
2. If no existing issue covers your bug, create a new issue
3. Include in your report:
   - Clear description of the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Environment details (OS, Node.js version, etc.)
   - Relevant logs
   - Screenshots if applicable

### Suggesting Enhancements

1. Check existing issues and pull requests
2. Create a new issue with:
   - Clear description of the enhancement
   - Use cases
   - Benefits
   - Potential implementation approach
   - Any potential impacts on existing functionality

### Pull Requests

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```

3. Make your changes following our coding standards
4. Test your changes thoroughly
5. Commit your changes with clear messages:
   ```bash
   git commit -m "feat: add new calendar sync feature"
   # or
   git commit -m "fix: resolve authentication timeout issue"
   ```

6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

7. Create a Pull Request with:
   - Clear description of changes
   - Link to related issues
   - Screenshots/videos for UI changes
   - Updated documentation if needed

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/google-calendar-mcp.git
cd google-calendar-mcp
```

2. Install dependencies:
```bash
npm install
```

3. Create a test Google Cloud project for development
4. Set up your environment variables in `.env`
5. Build the project:
```bash
npm run build
```

## Coding Standards

### TypeScript Guidelines

- Use TypeScript strict mode
- Provide clear type definitions
- Avoid `any` types when possible
- Use interfaces for object shapes
- Document complex types

### Style Guide

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Use template literals for string interpolation
- Add trailing commas in multi-line objects/arrays
- Keep lines under 100 characters

Example:
```typescript
interface CalendarEvent {
  id: string;
  summary: string;
  startTime: string;
  endTime: string;
  attendees?: string[];
}

function formatEvent(event: CalendarEvent): string {
  return `Event: ${event.summary}
Start: ${event.startTime}
End: ${event.endTime}`;
}
```

### Documentation

- Add JSDoc comments for functions and classes
- Keep comments current with code changes
- Document non-obvious code behavior
- Include examples for complex functionality

Example:
```typescript
/**
 * Creates a new calendar event with specified parameters.
 * 
 * @param {string} summary - Event title
 * @param {string} startTime - ISO string for event start time
 * @param {string} endTime - ISO string for event end time
 * @param {string[]} [attendees] - Optional list of attendee emails
 * @returns {Promise<CalendarEvent>} Created event object
 * @throws {Error} If authentication fails or invalid parameters
 */
async function createEvent(
  summary: string,
  startTime: string,
  endTime: string,
  attendees?: string[]
): Promise<CalendarEvent> {
  // Implementation
}
```

### Testing

- Write unit tests for new functionality
- Include integration tests for API interactions
- Test error conditions
- Maintain test coverage
- Use meaningful test descriptions

Example:
```typescript
describe('Calendar Event Creation', () => {
  it('should create an event with valid parameters', async () => {
    // Test implementation
  });

  it('should handle invalid date formats', async () => {
    // Test implementation
  });

  it('should retry on API timeout', async () => {
    // Test implementation
  });
});
```

## Review Process

1. Automated checks must pass:
   - TypeScript compilation
   - Linting
   - Tests
   - Code coverage

2. Code Review Requirements:
   - One approved review required
   - All review comments addressed
   - Documentation updated
   - Tests included
   - No merge conflicts

3. Merge Process:
   - Squash and merge preferred
   - Clear commit message
   - Delete branch after merge

## Release Process

1. Version numbers follow [Semantic Versioning](https://semver.org/)
2. Update CHANGELOG.md with changes
3. Create a new release in GitHub
4. Update documentation if needed
5. Notify users of breaking changes

## Getting Help

- Check existing documentation
- Ask in GitHub Discussions
- Join our community chat
- Contact maintainers
- Attend community meetings

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

## Questions?

Feel free to open an issue or contact the maintainers if you have any questions about contributing.
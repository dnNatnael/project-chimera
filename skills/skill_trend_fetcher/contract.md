# Skill Contract: Trend Fetcher

## Overview
**Skill Name**: `skill_trend_fetcher`  
**Version**: `1.0.0`  
**Category**: `analysis`  
**Description**: Discovers emerging topics and patterns relevant to agent personas and niches

---

## Input Schema

```yaml
input_schema:
  type: "object"
  properties:
    query_parameters:
      type: "object"
      description: "Parameters for trend search"
      properties:
        timeframe:
          type: "string"
          enum: ["1h", "6h", "24h", "7d", "30d"]
          default: "24h"
          description: "Time window for trend analysis"
        categories:
          type: "array"
          items:
            type: "string"
            enum: ["technology", "business", "entertainment", "sports", "politics", "science", "health", "finance"]
          max_items: 5
          description: "Specific categories to focus on"
        min_relevance_score:
          type: "float"
          default: 0.75
          range: [0.0, 1.0]
          description: "Minimum relevance score threshold"
        geographic_scope:
          type: "string"
          enum: ["global", "us", "eu", "asia", "local"]
          default: "global"
          description: "Geographic focus for trends"
          
    agent_context:
      type: "object"
      description: "Agent-specific context for personalization"
      properties:
        persona_id:
          type: "string"
          required: true
          description: "Agent persona identifier"
        niche_keywords:
          type: "array"
          items:
            type: "string"
          max_items: 10
          description: "Keywords defining agent's niche"
        audience_demographics:
          type: "object"
          properties:
            age_range:
              type: "string"
              pattern: "^[0-9]+-[0-9]+$"
            interests:
              type: "array"
              items:
                type: "string"
          description: "Target audience characteristics"
          
    sources:
      type: "array"
      items:
        type: "string"
        enum: ["twitter", "reddit", "news", "google_trends", "youtube", "tiktok"]
      default: ["twitter", "reddit", "news"]
      max_items: 6
      description: "Data sources to query"
      
  required: ["query_parameters", "agent_context"]
```

---

## Output Schema

```yaml
output_schema:
  type: "object"
  properties:
    trends:
      type: "array"
      items:
        type: "object"
        properties:
          trend_id:
            type: "string"
            description: "Unique identifier for the trend"
          topic:
            type: "string"
            description: "Main topic or keyword"
          relevance_score:
            type: "float"
            range: [0.0, 1.0]
            description: "Relevance to agent persona"
          engagement_metrics:
            type: "object"
            properties:
              mentions_count:
                type: "integer"
                minimum: 0
              sentiment_score:
                type: "float"
                range: [-1.0, 1.0]
              growth_rate:
                type: "float"
                description: "Growth rate over timeframe"
          metadata:
            type: "object"
            properties:
              first_detected:
                type: "string"
                format: "date-time"
              sources:
                type: "array"
                items:
                  type: "string"
              related_keywords:
                type: "array"
                items:
                  type: "string"
      description: "Array of discovered trends"
      
    analysis_summary:
      type: "object"
      properties:
        total_trends_found:
          type: "integer"
          minimum: 0
        average_relevance:
          type: "float"
          range: [0.0, 1.0]
        top_categories:
          type: "array"
          items:
            type: "string"
          max_items: 5
        data_freshness:
          type: "string"
          format: "date-time"
          description: "Timestamp of freshest data"
          
    confidence:
      type: "float"
      range: [0.0, 1.0]
      description: "Overall confidence in the results"
      
    execution_metadata:
      type: "object"
      properties:
        processing_time_ms:
          type: "integer"
          minimum: 0
        sources_queried:
          type: "integer"
          minimum: 0
        api_calls_made:
          type: "integer"
          minimum: 0
        cache_hit_rate:
          type: "float"
          range: [0.0, 1.0]
```

---

## Error Conditions

```yaml
error_conditions:
  - code: "INVALID_TIMEFRAME"
    message: "Invalid timeframe specified"
    retry: false
    examples: ["48h", "2months"]
    
  - code: "INVALID_CATEGORY"
    message: "One or more categories are not supported"
    retry: false
    examples: ["celebrity", "custom_category"]
    
  - code: "PERSONA_NOT_FOUND"
    message: "Specified persona_id does not exist"
    retry: false
    
  - code: "SOURCE_UNAVAILABLE"
    message: "One or more data sources are temporarily unavailable"
    retry: true
    retry_after: 300
    
  - code: "RATE_LIMITED"
    message: "API rate limit exceeded for one or more sources"
    retry: true
    retry_after: 60
    
  - code: "NETWORK_ERROR"
    message: "Network connectivity issues"
    retry: true
    retry_after: 30
    
  - code: "INSUFFICIENT_PERMISSIONS"
    message: "Agent lacks permissions for specified sources"
    retry: false
```

---

## Performance Requirements

```yaml
performance_requirements:
  max_execution_time: "30 seconds"
  max_memory_usage: "256MB"
  success_rate_threshold: 0.95
  timeout_handling: "graceful_degradation"
  
  benchmarks:
    small_query:
      description: "Single category, 24h timeframe"
      max_time: "5 seconds"
    medium_query:
      description: "3 categories, 7d timeframe"
      max_time: "15 seconds"
    large_query:
      description: "5+ categories, 30d timeframe"
      max_time: "30 seconds"
```

---

## Security Requirements

```yaml
security_requirements:
  authentication_required: true
  authorization_scope: ["trends:read", "analytics:view"]
  audit_level: "detailed"
  
  data_protection:
    personal_data: "none"
    encryption_in_transit: true
    data_retention: "24 hours for raw data"
    
  compliance:
    - "gdpr_compliant"
    - "data_minimization"
```

---

## Governance Requirements

```yaml
governance_requirements:
  judge_review_required: false
  hitl_escalation_threshold: null
  compliance_checks: ["data_source_validation", "content_policy"]
  
  monitoring:
    log_all_queries: true
    track_source_usage: true
    performance_monitoring: true
    
  quality_assurance:
    relevance_validation: true
    duplicate_detection: true
    trend_verification: true
```

---

## Usage Examples

### Basic Trend Discovery
```yaml
input:
  query_parameters:
    timeframe: "24h"
    categories: ["technology", "business"]
    min_relevance_score: 0.8
  agent_context:
    persona_id: "tech_innovator_001"
    niche_keywords: ["AI", "blockchain", "innovation"]
  sources: ["twitter", "reddit", "news"]

expected_output:
  trends:
    - topic: "AI breakthrough in quantum computing"
      relevance_score: 0.92
      engagement_metrics:
        mentions_count: 15420
        sentiment_score: 0.73
        growth_rate: 0.45
  confidence: 0.87
```

### Niche-Specific Analysis
```yaml
input:
  query_parameters:
    timeframe: "7d"
    categories: ["finance"]
    geographic_scope: "us"
  agent_context:
    persona_id: "crypto_analyst_002"
    niche_keywords: ["cryptocurrency", "DeFi", "NFTs"]
    audience_demographics:
      age_range: "25-45"
      interests: ["technology", "investing"]

expected_output:
  trends:
    - topic: "DeFi protocol launches new yield farming"
      relevance_score: 0.89
      engagement_metrics:
        mentions_count: 8750
        sentiment_score: 0.68
        growth_rate: 0.62
  confidence: 0.91
```

---

## Integration Points

### MCP Integration
- **Server**: `news-aggregator-mcp`
- **Tools**: [`fetch_trending_topics`, `analyze_sentiment`]
- **Authentication**: API Key from vault

### Database Integration
- **Read**: Agent personas, niche definitions
- **Write**: Trend discoveries, engagement metrics
- **Cache**: Recent trend data for performance

### External APIs
- **Twitter API**: Trend detection and sentiment analysis
- **Reddit API**: Topic monitoring and engagement tracking
- **News APIs**: Headline analysis and topic extraction

---

## Version History

### v1.0.0 (Current)
- Initial release with basic trend discovery
- Support for 6 major data sources
- Persona-based relevance scoring
- Geographic filtering capabilities

### Planned v1.1.0
- Real-time trend streaming
- Advanced sentiment analysis
- Predictive trend forecasting
- Social media influencer tracking

---

## Testing Requirements

### Unit Tests
- Input validation for all parameters
- Relevance scoring algorithm accuracy
- Error handling and edge cases
- Performance benchmark compliance

### Integration Tests
- MCP server connectivity
- Database read/write operations
- External API authentication and calls
- Cache functionality

### Performance Tests
- Load testing with concurrent requests
- Memory usage under sustained load
- Response time validation
- Error rate monitoring

This contract ensures that the Trend Fetcher skill can be implemented and invoked autonomously with clear expectations for inputs, outputs, performance, and governance.

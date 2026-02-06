# Skill Contract: Content Generator

## Overview
**Skill Name**: `skill_content_generator`  
**Version**: `1.0.0`  
**Category**: `content`  
**Description**: Generates persona-aligned content across multiple formats (text, images, video)

---

## Input Schema

```yaml
input_schema:
  type: "object"
  properties:
    content_request:
      type: "object"
      description: "Primary content generation request"
      properties:
        content_type:
          type: "string"
          enum: ["text", "image", "video", "audio", "multimodal"]
          required: true
          description: "Type of content to generate"
        topic:
          type: "string"
          required: true
          max_length: 500
          description: "Main topic or subject for content"
        format:
          type: "string"
          enum: ["blog_post", "social_media", "script", "article", "caption", "story"]
          default: "social_media"
          description: "Content format and structure"
        tone:
          type: "string"
          enum: ["professional", "casual", "humorous", "serious", "inspirational", "educational"]
          default: "professional"
          description: "Tone and style of content"
        length:
          type: "object"
          properties:
            min_words:
              type: "integer"
              minimum: 10
              maximum: 10000
              default: 100
            max_words:
              type: "integer"
              minimum: 10
              maximum: 10000
              default: 500
          description: "Target content length"
            
    persona_context:
      type: "object"
      required: true
      description: "Persona-specific context for content generation"
      properties:
        persona_id:
          type: "string"
          required: true
          description: "Agent persona identifier"
        voice_characteristics:
          type: "object"
          properties:
            formality:
              type: "string"
              enum: ["formal", "informal", "casual"]
            vocabulary_level:
              type: "string"
              enum: ["basic", "intermediate", "advanced", "expert"]
            personality_traits:
              type: "array"
              items:
                type: "string"
                enum: ["analytical", "creative", "friendly", "authoritative", "humorous", "empathetic"]
              max_items: 3
        background_knowledge:
          type: "array"
          items:
            type: "string"
          max_items: 10
          description: "Relevant background knowledge areas"
        communication_goals:
          type: "array"
          items:
            type: "string"
            enum: ["inform", "entertain", "persuade", "educate", "inspire", "engage"]
          max_items: 3
          
    constraints:
      type: "object"
      description: "Content generation constraints and guidelines"
      properties:
        forbidden_topics:
          type: "array"
          items:
            type: "string"
          max_items: 20
          description: "Topics to avoid"
        required_keywords:
          type: "array"
          items:
            type: "string"
          max_items: 10
          description: "Keywords that must be included"
        platform_guidelines:
          type: "object"
          properties:
            platform:
              type: "string"
              enum: ["twitter", "linkedin", "instagram", "tiktok", "youtube", "blog"]
            character_limits:
              type: "object"
              properties:
                min:
                  type: "integer"
                  minimum: 1
                max:
                  type: "integer"
                  maximum: 10000
            content_restrictions:
              type: "array"
              items:
                type: "string"
        compliance_requirements:
          type: "array"
          items:
            type: "string"
            enum: ["gdpr", "copa", "ftc", "internal_policy"]
          description: "Regulatory compliance requirements"
          
    generation_parameters:
      type: "object"
      description: "Technical parameters for content generation"
      properties:
        creativity_level:
          type: "float"
          default: 0.7
          range: [0.0, 1.0]
          description: "Creativity vs. predictability balance"
        quality_preset:
          type: "string"
          enum: ["draft", "standard", "premium", "ultra"]
          default: "standard"
          description: "Quality/effort level"
        iteration_count:
          type: "integer"
          default: 1
          range: [1, 5]
          description: "Number of generation iterations"
        seed:
          type: "string"
          description: "Random seed for reproducible generation"
          
  required: ["content_request", "persona_context"]
```

---

## Output Schema

```yaml
output_schema:
  type: "object"
  properties:
    generated_content:
      type: "object"
      properties:
        content_id:
          type: "string"
          description: "Unique identifier for generated content"
        content_type:
          type: "string"
          enum: ["text", "image", "video", "audio", "multimodal"]
        primary_content:
          type: "string"
          description: "Main generated content (text, image URL, etc.)"
        metadata:
          type: "object"
          properties:
            word_count:
              type: "integer"
              minimum: 0
            character_count:
              type: "integer"
              minimum: 0
            reading_time_minutes:
              type: "float"
              minimum: 0
            estimated_engagement:
              type: "object"
              properties:
                likes:
                  type: "float"
                  minimum: 0
                shares:
                  type: "float"
                  minimum: 0
                comments:
                  type: "float"
                  minimum: 0
        variations:
          type: "array"
          items:
            type: "object"
            properties:
              variation_id:
                type: "string"
              content:
                type: "string"
              score:
                type: "float"
                range: [0.0, 1.0]
          max_items: 3
          description: "Alternative content variations"
          
    quality_assessment:
      type: "object"
      properties:
        overall_score:
          type: "float"
          range: [0.0, 1.0]
          description: "Overall quality score"
        persona_consistency:
          type: "float"
          range: [0.0, 1.0]
          description: "How well content matches persona"
        coherence_score:
          type: "float"
          range: [0.0, 1.0]
          description: "Content coherence and flow"
        originality_score:
          type: "float"
          range: [0.0, 1.0]
          description: "Originality and uniqueness"
        compliance_score:
          type: "float"
          range: [0.0, 1.0]
          description: "Compliance with guidelines"
          
    confidence:
      type: "float"
      range: [0.0, 1.0]
      description: "Confidence in content quality and appropriateness"
      
    execution_metadata:
      type: "object"
      properties:
        generation_time_ms:
          type: "integer"
          minimum: 0
        model_used:
          type: "string"
          description: "AI model used for generation"
        tokens_consumed:
          type: "integer"
          minimum: 0
        iterations_performed:
          type: "integer"
          minimum: 0
        cache_hit:
          type: "boolean"
          description: "Whether content was retrieved from cache"
```

---

## Error Conditions

```yaml
error_conditions:
  - code: "INVALID_CONTENT_TYPE"
    message: "Unsupported content type specified"
    retry: false
    examples: ["3d_model", "vr_content"]
    
  - code: "PERSONA_NOT_FOUND"
    message: "Specified persona_id does not exist"
    retry: false
    
  - code: "TOPIC_VIOLATION"
    message: "Topic violates forbidden topics list"
    retry: false
    
  - code: "LENGTH_CONSTRAINT"
    message: "Generated content exceeds length constraints"
    retry: true
    retry_after: 5
    
  - code: "MODEL_UNAVAILABLE"
    message: "AI model temporarily unavailable"
    retry: true
    retry_after: 60
    
  - code: "CONTENT_FILTERED"
    message: "Content filtered by safety policies"
    retry: false
    
  - code: "INSUFFICIENT_CONTEXT"
    message: "Insufficient context for quality generation"
    retry: false
    
  - code: "RATE_LIMITED"
    message: "Generation rate limit exceeded"
    retry: true
    retry_after: 30
    
  - code: "PLATFORM_VIOLATION"
    message: "Content violates platform-specific guidelines"
    retry: false
```

---

## Performance Requirements

```yaml
performance_requirements:
  max_execution_time: "60 seconds"
  max_memory_usage: "1GB"
  success_rate_threshold: 0.95
  
  benchmarks:
    text_generation:
      description: "500-word social media post"
      max_time: "15 seconds"
    image_generation:
      description: "Standard resolution image"
      max_time: "45 seconds"
    video_generation:
      description: "30-second video clip"
      max_time: "120 seconds"
    multimodal_generation:
      description: "Text + image combination"
      max_time: "60 seconds"
```

---

## Security Requirements

```yaml
security_requirements:
  authentication_required: true
  authorization_scope: ["content:generate", "persona:read"]
  audit_level: "full"
  
  content_safety:
    toxicity_filtering: true
    personal_data_protection: true
    copyright_checking: true
    misinformation_detection: true
    
  compliance:
    - "content_moderation"
    - "platform_guidelines"
    - "regulatory_compliance"
```

---

## Governance Requirements

```yaml
governance_requirements:
  judge_review_required: true
  hitl_escalation_threshold: 0.7
  compliance_checks: ["content_safety", "persona_consistency", "platform_guidelines"]
  
  monitoring:
    content_quality_tracking: true
    persona_adherence_monitoring: true
    user_feedback_collection: true
    
  escalation_triggers:
    - confidence_score < 0.7
    - compliance_score < 0.8
    - sensitive_topic_detected
    - high_risk_content_type
```

---

## Usage Examples

### Basic Text Generation
```yaml
input:
  content_request:
    content_type: "text"
    topic: "Latest developments in quantum computing"
    format: "social_media"
    tone: "educational"
    length:
      min_words: 100
      max_words: 200
  persona_context:
    persona_id: "tech_expert_001"
    voice_characteristics:
      formality: "professional"
      vocabulary_level: "advanced"
      personality_traits: ["analytical", "authoritative"]
    background_knowledge: ["quantum_physics", "computer_science", "technology"]
  constraints:
    forbidden_topics: ["political", "religious"]
    platform_guidelines:
      platform: "twitter"
      character_limits:
        max: 280

expected_output:
  generated_content:
    content_type: "text"
    primary_content: "Breaking: Quantum computing reaches new milestone with 1000-qubit processor. This breakthrough could revolutionize drug discovery and cryptography. #QuantumComputing #Innovation"
    metadata:
      word_count: 145
      character_count: 198
  quality_assessment:
    overall_score: 0.92
    persona_consistency: 0.95
    compliance_score: 1.0
  confidence: 0.88
```

### Image Generation with Character Reference
```yaml
input:
  content_request:
    content_type: "image"
    topic: "Futuristic city with flying cars"
    format: "social_media"
    generation_parameters:
      quality_preset: "premium"
  persona_context:
    persona_id: "sci_fi_artist_002"
    voice_characteristics:
      personality_traits: ["creative"]
  constraints:
    platform_guidelines:
      platform: "instagram"

expected_output:
  generated_content:
    content_type: "image"
    primary_content: "https://cdn.chimera.ai/generated/abc123.jpg"
    metadata:
      estimated_engagement:
        likes: 1500
        shares: 200
  quality_assessment:
    overall_score: 0.89
    persona_consistency: 0.91
  confidence: 0.85
```

---

## Integration Points

### MCP Integration
- **Server**: `openai-mcp`
- **Tools**: [`generate_text`, `generate_image`]
- **Authentication**: Bearer token from vault

### Database Integration
- **Read**: Agent personas, content guidelines, character references
- **Write**: Generated content, quality metrics, usage statistics
- **Cache**: Frequently used content templates and variations

### External Services
- **OpenAI API**: Text and image generation
- **Content Moderation**: Safety and compliance checking
- **CDN Storage**: Image and video asset hosting

---

## Version History

### v1.0.0 (Current)
- Multi-format content generation (text, image, video)
- Persona-aware generation with consistency scoring
- Platform-specific constraint handling
- Comprehensive quality assessment

### Planned v1.1.0
- Real-time collaborative generation
- Advanced style transfer capabilities
- Multi-language content generation
- Interactive content formats

---

## Testing Requirements

### Unit Tests
- Content format validation
- Persona consistency verification
- Length constraint enforcement
- Quality scoring accuracy

### Integration Tests
- OpenAI API integration
- Content moderation pipeline
- Database storage operations
- CDN upload functionality

### Performance Tests
- Generation speed benchmarks
- Concurrent request handling
- Memory usage optimization
- Cache effectiveness validation

This contract ensures that the Content Generator skill can produce high-quality, persona-aligned content while maintaining safety and compliance standards.

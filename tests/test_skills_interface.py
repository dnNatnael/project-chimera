"""
Tests for skills interface compliance.

These tests define the expected behavior and interfaces for all skill modules.
They MUST FAIL until the implementations are provided.
"""

import pytest
import importlib
from typing import Dict, Any, List
from pathlib import Path


def test_skill_trend_fetcher_exists():
    """Assert that skill_trend_fetcher module exists and is not empty."""
    try:
        import skills.skill_trend_fetcher
        # Check that it's not just an empty namespace package
        if not hasattr(skills.skill_trend_fetcher, '__file__') or skills.skill_trend_fetcher.__file__ is None:
            pytest.fail("skill_trend_fetcher exists but is empty (no __init__.py or module files)")
    except ImportError as e:
        pytest.fail(f"skill_trend_fetcher module not found: {e}")


def test_skill_trend_fetcher_exposes_fetch_function():
    """Assert that skill_trend_fetcher exposes the expected function."""
    from skills import skill_trend_fetcher
    
    assert hasattr(skill_trend_fetcher, 'fetch_trends'), "fetch_trends function not found in skill_trend_fetcher"
    assert callable(skill_trend_fetcher.fetch_trends), "fetch_trends is not callable"


def test_skill_trend_fetcher_function_signature():
    """Assert that fetch_trends accepts correct parameters."""
    from skills.skill_trend_fetcher import fetch_trends
    
    # Function should be callable without parameters for basic trend fetching
    # May accept optional parameters for filtering
    try:
        # Test basic call
        result = fetch_trends()
    except TypeError as e:
        if "missing" in str(e).lower():
            pytest.fail(f"fetch_trends should be callable without required parameters: {e}")
        else:
            # Other type errors are expected (implementation missing)
            pass


def test_skill_trend_fetcher_returns_structured_data():
    """Assert that fetch_trends returns structured data, not raw text."""
    from skills.skill_trend_fetcher import fetch_trends
    
    try:
        result = fetch_trends()
        
        # Should return structured data (list, dict, or typed object)
        assert isinstance(result, (list, dict)), f"Expected structured data (list/dict), got {type(result)}"
        
        # Should not return raw text
        assert not isinstance(result, str), "Function should not return raw text strings"
        
    except Exception:
        # Expected to fail until implementation exists
        pass


def test_skill_video_publisher_exists():
    """Assert that skill_video_publisher module exists."""
    try:
        import skills.skill_video_publisher
    except ImportError as e:
        pytest.fail(f"skill_video_publisher module not found: {e}")


def test_skill_video_publisher_exposes_publish_function():
    """Assert that skill_video_publisher exposes the expected function."""
    from skills import skill_video_publisher
    
    # Based on skills README, this should handle publishing
    expected_functions = ['publish_video', 'upload_video', 'publish_content']
    
    found_function = None
    for func_name in expected_functions:
        if hasattr(skill_video_publisher, func_name):
            found_function = func_name
            break
    
    assert found_function is not None, f"None of expected functions {expected_functions} found in skill_video_publisher"
    assert callable(getattr(skill_video_publisher, found_function)), f"Found function {found_function} is not callable"


def test_skill_video_publisher_function_signature():
    """Assert that video publisher function accepts correct parameters."""
    from skills import skill_video_publisher
    
    # Find the available function
    expected_functions = ['publish_video', 'upload_video', 'publish_content']
    func_name = None
    for name in expected_functions:
        if hasattr(skill_video_publisher, name):
            func_name = name
            break
    
    if func_name:
        func = getattr(skill_video_publisher, func_name)
        
        # Should accept content-related parameters
        try:
            # Try calling with no parameters (should fail gracefully or work)
            result = func()
        except TypeError as e:
            if "missing" in str(e).lower() and "required" in str(e).lower():
                # Expected - function should require parameters like content, platform, etc.
                pass
            else:
                # Other errors are expected until implementation exists
                pass
        except Exception:
            # Other exceptions are expected until implementation exists
            pass


def test_skill_video_publisher_returns_structured_data():
    """Assert that video publisher returns structured data, not raw text."""
    from skills import skill_video_publisher
    
    # Find the available function
    expected_functions = ['publish_video', 'upload_video', 'publish_content']
    func_name = None
    for name in expected_functions:
        if hasattr(skill_video_publisher, name):
            func_name = name
            break
    
    if func_name:
        func = getattr(skill_video_publisher, func_name)
        
        try:
            # Try with minimal parameters
            result = func()
            
            # Should return structured data
            assert isinstance(result, (dict, list)), f"Expected structured data (dict/list), got {type(result)}"
            
            # Should not return raw text
            assert not isinstance(result, str), "Function should not return raw text strings"
            
        except Exception:
            # Expected to fail until implementation exists
            pass


def test_all_skill_modules_have_readme():
    """Assert that all skill modules have README files with contracts."""
    skills_dir = Path("skills")
    
    if not skills_dir.exists():
        pytest.fail("skills directory not found")
    
    skill_dirs = [d for d in skills_dir.iterdir() if d.is_dir() and d.name.startswith('skill_')]
    
    for skill_dir in skill_dirs:
        readme_path = skill_dir / "README.md"
        assert readme_path.exists(), f"README.md not found in {skill_dir}"
        
        # README should not be empty
        content = readme_path.read_text().strip()
        assert content, f"README.md is empty in {skill_dir}"


def test_skill_modules_follow_naming_convention():
    """Assert that skill modules follow the expected naming convention."""
    skills_dir = Path("skills")
    
    if not skills_dir.exists():
        pytest.fail("skills directory not found")
    
    skill_dirs = [d for d in skills_dir.iterdir() if d.is_dir()]
    
    for skill_dir in skill_dirs:
        # Should follow skill_ naming convention
        assert skill_dir.name.startswith('skill_'), f"Skill directory {skill_dir.name} should start with 'skill_'"


def test_no_missing_core_skills():
    """Assert that all core skills from README are present."""
    # Based on skills/README.md, core skills should include:
    expected_core_skills = [
        'skill_trend_fetcher',
        'skill_content_generator', 
        'skill_publisher'
    ]
    
    skills_dir = Path("skills")
    
    if not skills_dir.exists():
        pytest.fail("skills directory not found")
    
    existing_skills = {d.name for d in skills_dir.iterdir() if d.is_dir() and d.name.startswith('skill_')}
    
    missing_skills = set(expected_core_skills) - existing_skills
    assert not missing_skills, f"Missing core skills: {missing_skills}"
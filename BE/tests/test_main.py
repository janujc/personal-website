import unittest
import asyncio
import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__), ".."))
from app.main import read_root


class TestMain(unittest.TestCase):
    def test_read_root(self):
        result = asyncio.run(read_root())
        self.assertEqual(result, {"message": "Hello, world"})


if __name__ == "__main__":
    unittest.main()
